import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styles: [
  ]
})
export class AppoinmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];

}
