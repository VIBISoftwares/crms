import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { createAutoCorrectedDatePipe } from 'text-mask-addons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateComponent implements OnInit {

  guardian_type:any;
  constructor() {}

  ngOnInit(): void {}
  title = ['Mr', 'Mrs', 'Miss', 'Dr'];
  maritial_staus = ['Single', 'Married', 'Divorce', 'Seperater'];
  guardian = [
    'Father',
    'Mother',
    'Son',
    'Daughter',
    'grandFather',
    'GrandSon',
    'Guardian',
  ];
  occupation = ['Engineer', 'Doctor', 'Self Business', 'Agriculture'];
  country = ['India', 'Singapore', 'Malaisiya'];
  state = ['Tamilnadu', 'AndraPradesh', 'Telugana', 'Kerala', 'Karnadaka'];
  district = [
    'Chennai',
    'Chengalpattu',
    'Thiruvallur',
    'Kanjipuram',
    'Villupuram',
    'Trichy',
    'Madurai',
    'Selam',
  ];
  area=['Adaiyar','Vadapalani','Tharamani','Thambaram'];
  source = ['Facebook','Instagram','Whatsapp','Twitter', 'LinkedIn']
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];

  imageSrc:any;

  onFileChange(event){
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);    
      reader.onload = () => {
        this.imageSrc = "url("+reader.result as string+") no-repeat";     
        // this.myForm.patchValue({
        //   fileSource: reader.result
        // });
   
      };
   
    }
  }


}
