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

	sno:any;
	company_name:any;
	office_address:any;
	contact_person:any;
	person_contact:any;
	office_contact:any;
	email:any;
	gst_no:any;
	company_level:any;
	reference:any;
	assignto:any;
	status:any="true";
	createdby:any;
	createddate:any;
	updatedby:any;
	updateddate:any;

   update_btn="info rounded-pill px-4 float-right";
   reset_btn="secondary rounded-pill px-4 float-right";

  constructor(private service :ServicesService,private globals: Global,private http: HttpClient, private chrf : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getCompanyList();
  }

 getCompanyList(){  
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
    this.formData.status = (this.formData.status==true || this.formData.status==undefined)?'1':'0'; 
    var service$ = this.service.saveCompanyInfo( this.formData );
    if(this.formData.sno){
      service$ = this.service.updateCompanyInfo( this.formData );
    }
    Swal.fire({
      title: 'Are you sure want to save?',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) { 

        service$.subscribe(result => { // console.log(result); return;
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
    this.update_btn="info rounded-pill px-4 float-right";
  }

  rerender(){
      this.dtElement.dtInstance.then((dtInstance : DataTables.Api) => 
    {
        dtInstance.destroy();
        this.dtTrigger.next();
    });
  }


  editCompanyInfo(data:any){ console.log(data);
    this.sno= data.sno  ;
    this.company_name= data.company_name  ;
    this.office_address= data.office_address  ;
    this.contact_person= data.contact_person  ;
    this.person_contact= data.person_contact  ;
    this.office_contact= data.office_contact  ;
    this.email= data.email  ;
    this.gst_no= data.gst_no  ;
    this.company_level= data.company_level  ;
    this.reference= data.reference  ;
    this.assignto= data.assignto  ;
    this.status= (data.status=="1")?'true':'false'; 
    this.createdby= data.createdby  ;
    this.createddate= data.createddate  ;
    this.updatedby= data.updatedby  ;
    this.updateddate= data.updateddate  ;

    this.update_btn="danger rounded-pill px-4 float-right";
    return false;
  }

  deleteCompany(data:any){  
    
    Swal.fire({
      text: 'Are you sure want to delete this company ?',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-sm px-3',
        cancelButton: 'btn btn-sm',
      }
    }).then((result) => {
      if (result.value) { 
        this.service.deleteCompanyInfo( {'sno':data} ).subscribe(result => { 
          if (result['status'] == 'success') 
          {
            this.service.getCompanyList().subscribe((result) => {
              if(result['status']=='success'){
                Swal.fire({text:"Company details deleted successfully", customClass: { confirmButton: 'btn btn-sm px-3' }});
                this.returnedArray = result['company_list'];
                this.rerender();
              }  
            }),(err) => {
              console.log('err : ', err);
            }  
          }
          else if(result['status']=='failure')
          {
            Swal.fire({text:"Unable to delete this company, Please try again later", customClass: {
              confirmButton: 'btn btn-sm px-3',
              cancelButton: 'btn btn-sm',
            }});
            this.rerender();
          }
          (error) => {
            console.log(error)
          }
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({text:"Delete process cancelled", customClass: {
          confirmButton: 'btn btn-sm px-3',
          cancelButton: 'btn btn-sm',
        }});
      }
    })
  }
 
  ngOnDestroy() 
  {
      // Do not forget to unsubscribe
      this.dtTrigger.unsubscribe();
  }

}
