import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { DataTableDirective, DataTablesModule, } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ServicesService } from '../../../services.service';

import { companyData,CompanyData } from '../users-data';
import { createAutoCorrectedDatePipe } from 'text-mask-addons';
import { Global } from '../../../global/global';
import Swal from 'sweetalert2';
import { isThisSecond } from 'date-fns';
import { DataTable } from '@pascalhonegger/ng-datatable';


@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompanyContactComponent implements OnInit {
  
  returnedArray:any;
  formData:any;
  // dtElement:any;
  dtOptions: DataTables.Settings ={};
  dtTrigger: Subject<any>= new Subject();
  @ViewChild(DataTableDirective) dtElement:DataTableDirective;

  constructor(private service :ServicesService,private globals: Global,private http: HttpClient, private chrf : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCompanyList();
}

 getCompanyList(){  
  // this.service.getCompanyList().subscribe((result) => {
  //   if(result['status']=='success'){
  //     this.returnedArray = result['company_list'];
  //     this.chrf.detectChanges();
  //     // this.dTtTrigger.next();
  //     this.rerender();
  //   }  
  // }),(err) => {
  //   console.log('err : ', err);
  // }  

  this.service.getCompanyList().subscribe((result) => {
    if(result['status']=='success'){
      this.returnedArray = result['company_list'];
      this.chrf.detectChanges();
      this.dtTrigger.next();
    }  
  }),(err) => {
    console.log('err : ', err);
  }  
 }

  saveCompanyInfo(data:any){ 
    this.formData = data.value;
    this.formData.status = this.formData.status?'1':'0'; 
    Swal.fire({
      title: 'Are you sure want to save?',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) { 
        this.service.saveCompanyInfo( this.formData ).subscribe(result => {  // console.log(result); return;
          if (result['status'] == 'success') 
          {
            this.service.getCompanyList().subscribe((result) => {
              if(result['status']=='success'){
                this.returnedArray = result['company_list'];
                this.rerender();
              }  
            }),(err) => {
              console.log('err : ', err);
            }  
          }
          else if(result['status']=='failure')
          {
          }
          (error) => {
            console.log(error)
          }
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
    data.reset();
  }

  rerender(){
      this.dtElement.dtInstance.then((dtInstance : DataTables.Api) => 
    {
        // Destroy the table first in the current context
        dtInstance.destroy();

        // Call the dtTrigger to rerender again
       this.dtTrigger.next();

    });
  }

  editCompanyInfo(data){

  }

  
  ngOnDestroy() 
  {
      // Do not forget to unsubscribe
      this.dtTrigger.unsubscribe();
  }

}
