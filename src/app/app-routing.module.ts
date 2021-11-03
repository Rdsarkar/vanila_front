import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartListComponent } from './component/depart-list/depart-list.component';
import { DepartmentComponent } from './component/department/department.component';
import { DetailsComponent } from './component/details/details.component'
import { DetailListComponent } from './component/detail-list/detail-list.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'url2',
    pathMatch: 'full'
  },
  {
    path: 'url1',
    component: DepartmentComponent
  },
  {
    path: 'url2',
    component: DepartListComponent
  },
  {
    path: 'url3',
    component: DetailsComponent
  },
  {
    path: 'url4',
    component: DetailListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
