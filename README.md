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

npm add angular-datatables

npm install jquery --save
npm install datatables.net --save
npm install datatables.net-dt --save
npm install angular-datatables --save
npm install @types/jquery --save-dev
npm install @types/datatables.net --save-dev
npm install ngx-bootstrap bootstrap --save
npm install datatables.net-buttons --save
npm install datatables.net-buttons-dt --save
npm install @types/datatables.net-buttons --save-dev
npm install jszip --save

Manager :
Add filter in Lead report
OD report

flatpickr
https://github.com/mattlewis92/angularx-flatpickr/blob/master/demo/demo.component.ts

<a href={{'tel:'+e.Phone}}>{{e.Phone | PhoneNumber}}</a>


https://www.tutsmake.com/angular-11-sweetalert2-tutorial-example/
https://laratutorials.com/angular-12-sweetalert2-tutorial-example/
