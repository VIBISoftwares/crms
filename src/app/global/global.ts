import { HttpHeaders } from '@angular/common/http';

export class Global {
    host_url: string = window.location.hostname;
    url:"http://localhost:8080/crm/api/";
    header: any;
    razorpay_key:any;
    s3Bucketname:any;
    emails3Bucketname:any
    texteditorS3bucketname: any;
    jwt: string;
    careerFileBucketname:any;
    defaultheader={
    'Content-Type': 'application/json',
        'X-Token': '',
        'x-token': '',
  }

    constructor() {
        this.redirectToLogin();
        this.url="http://localhost:8080/crm/api/";
    }

    redirectToLogin(): void {
      console.log(this.host_url);
      if (this.host_url == "localhost") {
          this.url="http://localhost:8080/crm/api/";
      }
     
    }

    headers() {
      return this.header = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Token': '',
        'x-token': '',
    });
   
  }
}
