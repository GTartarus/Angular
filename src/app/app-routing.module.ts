import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';


const routes: Routes = [
  // {
  //   path: 'list',
  //   component: EmployeeListComponent,
  //   data: { title: ' Employee' }
  // },
  // {
  //   path: 'employee',
  //   component: EmployeeComponent,
  //   data: { title: 'Add Employee' }
  // },
  // {
  //   path: 'nav',
  //   component: NavbarComponent,
  // },
  // { path: '',
  //   redirectTo: '/list',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
