import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subject } from 'rxjs';
import { usersData, IUsersData } from '../users-data';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styles: [
  ]
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

  
  constructor() {}

  ngOnInit(): void {
    this.returnedArray = this.tableData.slice(0, 5);
  }
  
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

}
