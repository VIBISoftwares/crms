import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject , Observable } from 'rxjs';
import { CompanyContact } from './model/company-contact';
import { tap } from 'rxjs/operators';


const baseUrl = 'http://localhost:8080/crm/api/';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  private refreshment = new Subject<void>();
  
get refreshRequired(){
  return this.refreshment;
}
  
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  saveCompanyInfo(data):Observable<object>{ 
    return this.http.post<object>(baseUrl+'addCompanyInfo',data);
  }
  
  updateCompanyInfo(data):Observable<object>{ 
    return this.http.post<object>(baseUrl+'updateCompanyInfo',data);
  }

  deleteCompanyInfo(data):Observable<object>{ 
    return this.http.post<object>(baseUrl+'deleteCompanyInfo',data);
  }
   
  getCompanyList(): Observable<CompanyContact[]> {
    return this.http.get<CompanyContact[]>(baseUrl+"getCompanyList").pipe(
      tap(()=>{
        this.refreshment.next();
        
      })
    )
  }

  

}
