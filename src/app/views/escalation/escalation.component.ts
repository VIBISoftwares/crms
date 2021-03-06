import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Subject } from 'rxjs';
import { ServicesService } from '../../services.service';
import { Global } from '../../global/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-followup',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EscalationComponent implements OnInit {
 
  returnedArray = [];

  currentPage = 1;
  page: number;
  formData: any;
  // dtElement:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  defaultModal:any;
  filter_data = {
    status:"1",
    order_by: " appointment_datetime DESC"
  }

    
  minDate = new Date(1991, 1, 1);
  maxDate = new Date();
  fromDate = new Date();
  fromDateNew = this.fromDate.setDate(this.fromDate.getDate()+1);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(), new Date(this.fromDateNew) ];


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
  status:any="true";
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
  
  selectedAll:any;
  showButton:any;
  selectedRow:any=[];
  new_followup:any= new Date();


  constructor(private service: ServicesService, private globals: Global, private http: HttpClient, private chrf: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   dom: 'Bfrtip',
    // };    
    this.getEsclationInfo();
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

  getEsclationInfo() {
    this.service.getEsclationInfo().subscribe((result) => {
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
  this.filter_data["to_date"] = this.formatDate(this.bsRangeValue[1]);
    this.service.findLeadInfo( this.filter_data).subscribe((result) => {
      if (result['status'] == 'success') {
        this.returnedArray = result['company_list'];
        this.rerender();
      }
    }), (err) => {
      console.log('err : ', err);
    }
}

fullname:any;
editLeadInfo(data: any) {  console.log(data);
  this.sno = data.sno;    
  this.title = data.title  ;
  this.firstname = data.firstname  ;
  this.middlename = data.middlename  ;
  this.lastname = data.lastname  ;
  this.fullname = this.title+ " " + this.firstname + " " + this.lastname;
  this.gender = data.gender  ;
  this.email = data.email  ;
  this.contact = data.contact  ;
  this.occupation = data.occupation  ;
  this.marital_status = data.marital_status  ;
  this.guardian_type = data.guardian_type  ;
  this.guardian_name = data.guardian_name  ;
  this.guardian_contact = data.guardian_contact  ;
  this.dob = data.dob;
  this.religion = data.religion  ;
  this.community = data.community  ;
  this.caste = data.caste  ;
  this.address_line1 = data.address_line1  ;
  this.address_line2 = data.address_line2  ;
  this.pincode = data.pincode  ;
  this.country = data.country  ;
  this.state = data.state  ;
  this.district = data.district  ;
  this.area = data.area  ;
  this.source = data.source  ;
  this.appointment_datetime = data.appointment_datetime;
  this.is_convert = data.is_convert  ;
  this.status= (data.status=="1")?'true':'false'; 

  // this.update_btn = "danger rounded-pill px-4 float-right";
  return false;
}

addLeadInfo(data: any) {
  this.formData = data.value; 
  this.formData.status = (this.formData.status == true || this.formData.status == undefined) ? '1' : '0';
  var service$ = this.service.addLeadInfo(this.formData);
  if (this.formData.sno) {
    service$ = this.service.updateLeadInfo(this.formData);
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
      service$.subscribe(result => { 
        if (result['status'] == 'success') {
          var data={
            limit:"5",
            order_by:" sno DESC"
          }
          this.service.findLeadInfo(data).subscribe((result) => {
            if (result['status'] == 'success') {
              this.returnedArray = result['company_list'];
              this.rerender();
            }
          }), (err) => {
            console.log('err : ', err);
          }
        }
        else if (result['status'] == 'failure') {
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

deleteLeadInfo(data: any) {
  Swal.fire({
    text: 'Are you sure want to delete this client ?',
    showCancelButton: true,
    customClass: {
      confirmButton: 'btn btn-sm px-3',
      cancelButton: 'btn btn-sm',
    }
  }).then((result) => {
    if (result.value) { 
      this.service.deleteLeadInfo( {'sno':data} ).subscribe(result => { 
        if (result['status'] == 'success') 
        {
          var data={
            limit:"5",
            order_by:" sno DESC"
          }
          this.service.findLeadInfo(data).subscribe((result) => {
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


onFileChange(event) {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = "url(" + reader.result as string + ") no-repeat";
      this.imagefit = "100% 100%";
      // this.myForm.patchValue({
      //   fileSource: reader.result
      // });
    };
  }
}

selectAll(){
  for (var i = 0; i < this.returnedArray.length; i++) {
    this.returnedArray[i].selected = this.selectedAll;
    this.showButton = this.selectedAll;
    if(this.returnedArray[i].selected){
      this.showButton = this.returnedArray[i].selected;   
    } 

  if (this.selectedAll){
    if (!this.selectedRow.includes(this.returnedArray[i]['sno'])){
      this.selectedRow.push(this.returnedArray[i]['sno']);  
  }
  }else{
    this.selectedRow.pop(this.returnedArray[i]['sno']);  
  }
}  
  //  console.log(this.selectedRow);
}

deSelect(){ 
  for (var i = 0; i < this.returnedArray.length; i++) {  
    if(this.returnedArray[i].selected ){     
      this.showButton = true;
      if (!this.selectedRow.includes(this.returnedArray[i]['sno'])){
          this.selectedRow.push(this.returnedArray[i]['sno']);  
      }
    }
    
    if( !this.returnedArray[i].selected ){ 
      if (this.selectedRow.includes(this.returnedArray[i]['sno'])){  
        this.selectedRow.pop(this.returnedArray[i]['sno']); 
      }
    }
  }
  if(this.selectedRow.length==0){
    this.showButton = false;
  }
}

changeFollowup(){
  let data={
    "appointment_datetime":  this.formatDate(this.new_followup),
    "lead_sno":JSON.stringify(this.selectedRow)  
  };
   //  console.log(data); return;
    Swal.fire({
      text: 'Are you sure want to change this follow up dates?',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-sm px-3',
        cancelButton: 'btn btn-sm',
      }
    }).then((result) => {
      if (result.value) { 
        this.service.changeFollowupDate(data).subscribe(result => {  console.log(result);
          if (result['status'] == 'success') 
          {
            var data={  }
            this.service.getEsclationInfo().subscribe((result) => {
              if(result['status']=='success'){
                Swal.fire({text:"Followup date updated successfully", customClass: { confirmButton: 'btn btn-sm px-3' }});
                this.returnedArray = result['company_list'];
                this.rerender();
              }  
            }),(err) => {
              console.log('err : ', err);
            }  
          }
          else if(result['status']=='failure')
          {
            Swal.fire({text:"Unable to change followup date, Please try again later", customClass: {
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



}
