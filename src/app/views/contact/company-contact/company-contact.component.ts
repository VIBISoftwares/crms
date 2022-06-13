import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { catchError, timeout, finalize } from 'rxjs/operators';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ServicesService } from '../../../services.service';

import { companyData,CompanyData } from '../users-data';
import { createAutoCorrectedDatePipe } from 'text-mask-addons';
import{DataTablesResponse} from '../../models/interfaces'
import { Global } from '../../../global/global';


@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CompanyContactComponent implements OnInit {
  cForm:any;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

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

  public phoneModel = '';
  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public taxModel = '';
  public taxMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  public ssnModel = '';
  public ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public eyeScriptModel = '';
  public eyeScriptMask = ['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/];

  public ccnModel = '';
  public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];

  constructor(private service :ServicesService,private globals: Global,private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;
    this.returnedArray =[];// this.tableData;//.slice(0, 5);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      dom: 'Blfrtip',
        buttons: [
            'pdf', 'excel', 'print'
        ],
        ajax: (dataTablesParameters: any, callback) => {
          this.service.getCompanyList().subscribe((result) => {
            if(result['status']=='success'){
              this.returnedArray = result['company_list'];
              console.log(this.returnedArray);
              this.dtTrigger.next();
              //this.returnedArray= result.company_list;
            }else{

            }
             callback({
              data: []
            });
           
          }),(err) => {
            console.log('err : ', err);
          }
        },
        // columns: [{ data: 'id'},  {data: 'company_name' }, { data: 'office_address' }, { data: 'contact_person' },{ data: 'person_contact' }, { data: 'office_contact' }, { data: 'assignto' }, {data: 'status'}]
  
  }
}

rerender(): void {
  this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    // Destroy the table first
    dtInstance.destroy();
    // Call the dtTrigger to rerender again
    this.dtTrigger.next();
  });
 }


  saveCompanyInfo(data:any){
    this.returnedArray=[];
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.ajax.reload()
    });

   // Swal.fire('Thank you...', 'You submitted succesfully!', 'success');

    // this.http.saveCompanyInfo(data.value).subscribe(
    //   data=>{
    //     console.log('Success',data);
    //   },
    //   error=>{
    //     console.log('error...!',error);
    //   }
    // )

  this.service.saveCompanyInfo(data.value).subscribe(data => { console.log(data);
      if (data['status'] == 'success') 
      {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.ajax.reload()
        });
       
      }
      else if(data['status']=='failure')
      {
        if(data['message'] == "Client name is already exists"){
        
        }else{
         
        }
      }
      (error) => {
        console.log(error)
      }
    })
    data.reset();
  }


}
