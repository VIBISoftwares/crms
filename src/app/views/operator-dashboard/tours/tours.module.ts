import { ToursRoutingModule } from './tours-routing.module';
import { ToursComponent } from './tours.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule, GridModule } from '@coreui/angular';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { DataTablesRoutingModule } from '../../tables/data-tables/data-tables-routing.module';
import { DataFilterPipe } from './data-tables-filter.pipe';
import { IconModule } from '@coreui/icons-angular';

@NgModule({
  declarations: [ToursComponent, DataFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ToursRoutingModule,
    HttpClientModule,
    DataTablesRoutingModule,
    DataTableModule,
    CardModule,
    GridModule,
    DataTableModule,
    IconModule,
  ],
})
export class ToursModule {}
