import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FollowupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];
  

  
}
