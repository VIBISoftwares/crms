import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];
  

}
