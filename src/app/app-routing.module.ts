import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './component/department/department.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'url1',
    pathMatch: 'full'
  },
  {
    path: 'url1',
    component: DepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
