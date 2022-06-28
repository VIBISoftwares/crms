import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { catchError, timeout, finalize } from 'rxjs/operators';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ServicesService } from '../../../services.service';

import { companyData,CompanyData } from '../users-data';
import { createAutoCorrectedDatePipe } from 'text-mask-addons';
import{DataTablesResponse} from '../../models/interfaces'
import { Global } from '../../../global/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompanyContactComponent implements OnInit , OnDestroy{
  cForm:any;
  @ViewChild(DataTableDirective , {static: false})
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // dtInstance: Promise<DataTables.Api>;
  formData:any;
  tableData = companyData;
  returnedArray:any;// CompanyData[];
  currentPage = 1;
  page: number;

  public dateModel = '';
  public dateMask = {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: createAutoCorrectedDatePipe('mm/dd/yyyy'),
    placeholder: 'Please enter a date',
    keepCharPositions: true,
  };

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];

  constructor(private service :ServicesService,private globals: Global,private http: HttpClient, private chrf : ChangeDetectorRef) {}

  ngOnInit(): void {
    const that = this;
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   lengthMenu:[10,25,50,100],
    //   processing: true,
    //   dom: 'Blfrtip',
    //     buttons: [
    //         'pdf', 'excel', 'print'
    //     ],
    // };

    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
    };

    
    // this.returnedArray=[];
    this.getCompanyList();
}

ngAfterViewInit(): void {
  this.dtTrigger.next();
}

ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}


rerender(): void {
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    dtInstance.destroy();
    this.dtTrigger.next();
  });
 }


 getCompanyList(){  
  this.service.getCompanyList().subscribe((result) => {
    if(result['status']=='success'){
      this.returnedArray = result['company_list'];
      this.chrf.detectChanges();
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
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
            this.chrf.detectChanges() ;
            this.getCompanyList();
            this.rerender();
          }
          else if(result['status']=='failure')
          {
            if(result['message'] == "Client name is already exists"){
            
            }else{
             
            }
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


  editCompanyInfo(data){

  }

}
