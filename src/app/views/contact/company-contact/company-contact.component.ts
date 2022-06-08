import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subject } from 'rxjs';
import { companyData,CompanyData } from '../users-data';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
};

interface Person {
  id: number;
  firstName: string;
  lastName: string;
};

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styles: [
  ]
})
export class CompanyContactComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  persons: Person[];

  tableData = companyData;
  returnedArray: CompanyData[];

  currentPage = 1;
  page: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.returnedArray = this.tableData.slice(0, 5);


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        dataTablesParameters.minNumber = dataTablesParameters.start + 1;
        dataTablesParameters.maxNumber =
          dataTablesParameters.start + dataTablesParameters.length;
        console.log(
          dataTablesParameters.minNumber,
          dataTablesParameters.maxNumber
        );
        console.log('All Params', dataTablesParameters);
        this.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters,
            {}
          )
          .subscribe(resp => {
            this.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };



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
