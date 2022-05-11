import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss'],
})
export class AddTourComponent implements OnInit {
  collapsed = false;
  togglerIcons = ['cil-chevron-top', 'cil-chevron-bottom'];
  newTourAdded = true;
  private collapseObservable: Observable<boolean>;

  get currentIcon() {
    return this.collapsed ? this.togglerIcons[1] : this.togglerIcons[0];
  }

  loremText =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';

  constructor() {}

  ngOnInit(): void {}
  toggleCollapse() {
    if (!this.newTourAdded) return;

    this.collapsed = !this.collapsed;
  }

  onClickSubmit() {
    this.newTourAdded = true;
    //this.collapsed = false;
  }
}
