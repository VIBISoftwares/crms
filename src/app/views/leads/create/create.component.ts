import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { createAutoCorrectedDatePipe } from 'text-mask-addons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];
  

}
