import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravllersComponent } from './add-travllers.component';

describe('AddTravllersComponent', () => {
  let component: AddTravllersComponent;
  let fixture: ComponentFixture<AddTravllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravllersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTravllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
