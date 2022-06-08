# crms

ng g c hero-component --flat -it -is --skipTests

ng g m [module-name] --routing

ng g m views/contact --routing=true 
ng g c views/tickets/raise -is --skip-tests=true -m=tickets
ng g c views/contact/company-contact -is --skip-tests=true -m=contact


ng add @angular/pwa
npm uninstall @angular/pwa
npm cache clean --force

ng build --prod


npm install jquery --save
npm install bootstrap --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save
npm install @types/datatables.net --save

Manager :
Add filter in Lead report
OD report

flatpickr
https://github.com/mattlewis92/angularx-flatpickr/blob/master/demo/demo.component.ts

<a href={{'tel:'+e.Phone}}>{{e.Phone | PhoneNumber}}</a>