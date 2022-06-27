import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subject } from 'rxjs';
import { ServicesService } from '../../../services.service';
import { Global } from '../../../global/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManagementComponent implements OnInit {

  returnedArray = [];

  currentPage = 1;
  page: number;
  formData: any;
  // dtElement:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;


  filter_data = {
    status:"1",
    order_by: " followupdate DESC"
  }

    
  minDate = new Date(1991, 1, 1);
  maxDate = new Date();
  fromDate = new Date();
  fromDateNew = this.fromDate.setDate(this.fromDate.getDate()+1);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(), new Date(this.fromDateNew) ];


  constructor(private service: ServicesService, private globals: Global, private http: HttpClient, private chrf: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   dom: 'Bfrtip',
    // };    
    this.findLeadInfo();
  }

  getAllClientList() {
    this.service.getAllClientList().subscribe((result) => {
      if (result['status'] == 'success') {
        this.returnedArray = result['company_list'];
        this.chrf.detectChanges();
        this.dtTrigger.next();
      }
    }), (err) => {
      console.log('err : ', err);
    }
  }

  findLeadInfo() {
    this.service.findLeadInfo(this.filter_data).subscribe((result) => {
      console.log(result);
      if (result['status'] == 'success') {
        this.returnedArray = result['company_list'];
        this.chrf.detectChanges();
        this.dtTrigger.next();
      }
    }), (err) => {
      console.log('err : ', err);
    }
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}
 

searchFilter(){
  this.filter_data["from_date"] = this.formatDate(this.bsRangeValue[0]);
  this.filter_data["to_date"] = this.formatDate(this.bsRangeValue[0]);
    this.service.findLeadInfo( this.filter_data).subscribe((result) => {
      if (result['status'] == 'success') {
        this.returnedArray = result['company_list'];
        this.rerender();
      }
    }), (err) => {
      console.log('err : ', err);
    }
}


}
