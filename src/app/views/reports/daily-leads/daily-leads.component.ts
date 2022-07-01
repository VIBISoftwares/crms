import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subject } from 'rxjs';
import { Global } from '../../../global/global';
import { ServicesService } from '../../../services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-daily-leads',
  templateUrl: './daily-leads.component.html',
  styleUrls: ['./daily-leads.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DailyLeadsComponent implements OnInit {

  returnedArray = [];

  currentPage = 1;
  page: number;
  formData: any;
  // dtElement:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  defaultModal: any;
  filter_data = {
    status: "1",
    order_by: " appointment_datetime DESC"
  }


  minDate = new Date(1991, 1, 1);
  maxDate = new Date();
  fromDate = new Date();
  fromDateNew = this.fromDate.setDate(this.fromDate.getDate() + 1);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(), new Date(this.fromDateNew)];


  sno: any;
  title_list: any = ['Mr', 'Mrs', 'Miss', 'Dr'];
  title: any;
  firstname: any;
  middlename: any;
  lastname: any;
  gender: any;
  email: any;
  contact: any;
  occupation: any;
  marital_status: any;
  guardian_type: any;
  guardian_name: any;
  guardian_contact: any;
  dob = new Date();
  religion: any;
  community: any;
  caste: any;
  address_line1: any;
  address_line2: any;
  pincode: any;
  country: any;
  state: any;
  district: any;
  area: any;
  source: any;
  appointment_datetime = new Date();
  is_convert: any;
  status: any = "true";
  created_by: any;
  updated_by: any;
  imageSrc: any;
  imagefit: any;

  maritial_list = ['Single', 'Married', 'Divorce', 'Seperater'];
  guardian_list = [
    'Father',
    'Mother',
    'Son',
    'Daughter',
    'grandFather',
    'GrandSon',
    'Guardian',
  ];
  occupation_list = ['Engineer', 'Doctor', 'Self Business', 'Agriculture'];
  country_list = ['India', 'Singapore', 'Malaisiya'];
  state_list = ['Tamilnadu', 'AndraPradesh', 'Telugana', 'Kerala', 'Karnadaka'];
  district_list = [
    'Chennai',
    'Chengalpattu',
    'Thiruvallur',
    'Kanjipuram',
    'Villupuram',
    'Trichy',
    'Madurai',
    'Selam',
  ];
  area_list = ['Adaiyar', 'Vadapalani', 'Tharamani', 'Thambaram'];
  source_list = ['Facebook', 'Instagram', 'Whatsapp', 'Twitter', 'LinkedIn']

  selectedAll: any;
  showButton: any;
  selectedRow: any = [];
  new_followup: any = new Date();


  // converions datas
  lead_sno: any;
  branch: any = 'chennai';
  branch_list = ['Chennai', 'Madurai'];
  cheque_value: any;
  product: any;
  product_list = ['Equity', 'Commodities', 'Plan Type Upgraded', 'Equity NRI', 'Currency', 'Equity & Commodities', 'DailyGong Business Partner'];
  kyc_number: any;
  kyc_type: any;
  kyc_type_list = ['Physical form', 'EKYC']
  brokerage_offer: any;
  brokerage_list = ['Options Rs7 / Per Lot', 'No offer', 'Eligible Rs 1', 'SPLofr Rs1 & Options Rs5 per lot, CU Rs1'];
  plan_type: number;
  plany_type_list = ['1', '999', '4999', '9999']
  plan_type_cost: any;
  gst_val: any;
  total_cost: any;
  trade_amount: any;

  // payment details
  bank_name: any;
  account_no: any;
  payment_date: any = new Date();
  payment_mode: any;   //cheque/neft
  trans_id: any;


  constructor(private service: ServicesService, private globals: Global, private http: HttpClient, private chrf: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   dom: 'Bfrtip',
    // };    
    this.getAllLeadInfo();
  }

  ifUndefined() {
    return "a";//v.filter(val => !!val).join('')
  }

  getAllLeadInfo() {
    this.service.getAllLeadInfo().subscribe((result) => {
      console.log(result)
      if (result['status'] == 'success') {
        this.returnedArray = result['company_list'];
        for (var i = 0; i <= this.returnedArray.length; i++) {

        }

        this.returnedArray.forEach(function (i, v) {
          // i.full_addr = i.address_line1 + " " +  + " " + i.district + " " + i.state + " " + i.country;
          
          console.log(i);
        });


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

  getTodayFollowups() {
    this.service.getTodayFollowups().subscribe((result) => {
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

  totalCalc() {
    this.total_cost = Number(this.plan_type) + Number(this.plan_type * this.gst_val / 100)
    this.trade_amount = Number(this.cheque_value - this.total_cost)
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


  searchFilter() {
    this.filter_data["from_date"] = this.formatDate(this.bsRangeValue[0]);
    this.filter_data["to_date"] = this.formatDate(this.bsRangeValue[1]);
    this.service.findLeadInfo(this.filter_data).subscribe((result) => {
      if (result['status'] == 'success') {
        this.returnedArray = result['company_list'];
        this.rerender();
      }
    }), (err) => {
      console.log('err : ', err);
    }
  }

  fullname: any;

}
