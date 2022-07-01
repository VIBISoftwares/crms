import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject , Observable, throwError } from 'rxjs';
import { CompanyContact } from './model/company-contact';
import { catchError, tap } from 'rxjs/operators';


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


  // Client API

  addClientInfo(data):Observable<object>{ 
    return this.http.post<object>(baseUrl+'addClientInfo',data);
  }
   
  updateClientInfo(data):Observable<object>{ 
    return this.http.post<object>(baseUrl+'updateClientInfo',data);
  }

  deleteClientInfo(data):Observable<object>{ 
    return this.http.post<object>(baseUrl+'deleteClientInfo',data);
  }
   
  getAllClientList(): Observable<object[]> {
    return this.http.get<object[]>(baseUrl+"getAllClientList").pipe(
      tap(()=>{
        this.refreshment.next();
        
      })
    )
  }
  
// lead API  
addLeadInfo(data):Observable<object>{ 
  return this.http.post<object>(baseUrl+'addLeadInfo',data);
}
 
updateLeadInfo(data):Observable<object>{ 
  return this.http.post<object>(baseUrl+'updateLeadInfo',data);
}

deleteLeadInfo(data):Observable<object>{ 
  return this.http.post<object>(baseUrl+'deleteLeadInfo',data);
}
 
getAllLeadInfo(): Observable<object[]> {
  return this.http.get<object[]>(baseUrl+"getAllLeadInfo").pipe(
    tap(()=>{
      this.refreshment.next();      
    })
  )
}

findLeadInfo(data):Observable<object>{ 
  return this.http.post<object>(baseUrl+'findLeadInfo',data);
}

// Lead Followup's
changeFollowupDate(data):Observable<object>{ 
  return this.http.post<object>(baseUrl+'changeFollowupDate',data).pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    })
  )
}

getTodayFollowups(): Observable<CompanyContact[]> {
  return this.http.get<CompanyContact[]>(baseUrl+"getTodayFollowups").pipe(
    tap(()=>{
      this.refreshment.next();
      
    })
  )
}


getEsclationInfo(): Observable<CompanyContact[]> {
  return this.http.get<CompanyContact[]>(baseUrl+"getEsclationInfo").pipe(
    tap(()=>{
      this.refreshment.next();
      
    })
  )
}

addLeadTrade(data):Observable<object>{ 
  return this.http.post<object>(baseUrl+'addLeadTrade',data);
}
 


}
