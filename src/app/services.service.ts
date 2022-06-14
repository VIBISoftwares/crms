import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyContact } from './model/company-contact';


const baseUrl = 'http://localhost:8080/crm/api/';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }


  saveCompanyInfo(data):Observable<object>{ 
    return this.http.post<object>(baseUrl+'addCompanyInfo',data);
  }
   
  getCompanyList(): Observable<CompanyContact[]> {
    return this.http.get<CompanyContact[]>(baseUrl+"getCompanyList");
  }

  

}
