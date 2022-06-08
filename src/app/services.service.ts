import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyContact } from './model/company-contact';


const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
   
  getAllCompanyContact(): Observable<CompanyContact[]> {
    return this.http.get<CompanyContact[]>(baseUrl);
  }

}
