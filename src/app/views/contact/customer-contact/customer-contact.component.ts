import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subject } from 'rxjs';
import { ServicesService } from '../../../services.service';
import { usersData, IUsersData } from '../users-data';
import { Global } from '../../../global/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styles: [  ],  
  encapsulation: ViewEncapsulation.None,
})
export class CustomerContactComponent implements OnInit {

  tableData = usersData;
  returnedArray: IUsersData[];

  currentPage = 1;
  page: number;


  formData:any;
  // dtElement:any;
  dtOptions: DataTables.Settings ={};
  dtTrigger: Subject<any>= new Subject();
  @ViewChild(DataTableDirective) dtElement:DataTableDirective;

	sno:any;
  contact_name:any;
  contact_number:any;
  alternate_number:any;
  email_id:any;
  facebook:any;
  instagram:any;
  linked_in:any;
  others_media_id:any;
  status:any;
	createdby:any;
	createddate:any;
	updatedby:any;
	updateddate:any;

  
  update_btn="info rounded-pill px-4 float-right";
  reset_btn="secondary rounded-pill px-4 float-right";

  constructor(private service :ServicesService,private globals: Global,private http: HttpClient, private chrf : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.returnedArray = this.tableData.slice(0, 5);
    this.getAllClientList();
  }

  getAllClientList(){  
  this.service.getAllClientList().subscribe((result) => { 
  if(result['status']=='success'){
    this.returnedArray = result['company_list'];
    this.chrf.detectChanges();
    this.dtTrigger.next();
  }  
}),(err) => {
  console.log('err : ', err);
}  
}


addClientInfo(data:any){  console.log(data);
  this.formData = data.value;
  this.formData.status = (this.formData.status==true || this.formData.status==undefined)?'1':'0'; 
  var service$ = this.service.addClientInfo( this.formData );
  if(this.formData.sno){
    service$ = this.service.updateClientInfo( this.formData );
  }
  Swal.fire({
    text: 'Are you sure want to save?',
    showCancelButton: true,
    customClass: {
      confirmButton: 'btn btn-sm px-3',
      cancelButton: 'btn btn-sm',
    }
  }).then((result) => {
    if (result.value) { 
      service$.subscribe(result => { // console.log(result); return;
        if (result['status'] == 'success') 
        {
          this.service.getAllClientList().subscribe((result) => {
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

editClientInfo(data:any){
  this.sno= data.sno  ;
  this.contact_name= data.contact_name  ;
  this.contact_number= data.contact_number  ;
  this.alternate_number= data.alternate_number  ;
  this.email_id= data.email_id  ;
  this.facebook= data.facebook  ;
  this.instagram= data.instagram  ;
  this.linked_in= data.linked_in  ;
  this.others_media_id= data.others_media_id  ;
  this.status= data.status  ;
  
  this.update_btn="danger rounded-pill px-4 float-right";
  return false;
}

deleteClientInfo(data){
  Swal.fire({
    text: 'Are you sure want to delete this client ?',
    showCancelButton: true,
    customClass: {
      confirmButton: 'btn btn-sm px-3',
      cancelButton: 'btn btn-sm',
    }
  }).then((result) => {
    if (result.value) { 
      this.service.deleteClientInfo( {'sno':data} ).subscribe(result => { 
        if (result['status'] == 'success') 
        {
          this.service.getAllClientList().subscribe((result) => {
            if(result['status']=='success'){
              Swal.fire({text:"Client details deleted successfully", customClass: { confirmButton: 'btn btn-sm px-3' }});
              this.returnedArray = result['company_list'];
              this.rerender();
            }  
          }),(err) => {
            console.log('err : ', err);
          }  
        }
        else if(result['status']=='failure')
        {
          Swal.fire({text:"Unable to delete this client details, Please try again later", customClass: {
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

  /*
  saveContact(data){

  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.page = event.page;
    this.returnedArray = this.tableData.slice(startItem, endItem);
  }

  getBadge(status) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }

  */

}
