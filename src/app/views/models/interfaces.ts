import { Type } from '@angular/core';

export interface DataTablesResponse {
    data: any[];
    clientDetails: any[];
    draw: number;
    recordsFiltered: number;
    recordsTotal: number;
}