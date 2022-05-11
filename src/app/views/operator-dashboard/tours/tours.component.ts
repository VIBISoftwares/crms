import { Component, OnInit } from '@angular/core';
import {
  DataTablesService,
  ITableData,
} from '../../tables/data-tables/data-tables.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  providers: [DataTablesService],
})
export class ToursComponent implements OnInit {
  error: any;
  public data: ITableData;
  public filterQuery = '';
  constructor(private dataTableService: DataTablesService) {
    this.dataTableService.getData().subscribe(
      (data: ITableData) => {
        setTimeout(() => {
          this.data = [...data];
        }, 1000);
      }, // success path
      (error) => (this.error = error) // error path
    );
  }

  ngOnInit() {}

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  };

  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  }
}
