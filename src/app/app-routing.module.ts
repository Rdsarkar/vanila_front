import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartListComponent } from './component/depart-list/depart-list.component';
import { DepartmentComponent } from './component/department/department.component';
import { DetailsComponent } from './component/details/details.component';
import { DetailsCreateComponent } from './component/details-create/details-create.component';
import { ChequeComponent } from './component/cheque/cheque.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'url5',
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
    component: DetailsCreateComponent
  },
  {
    path: 'url5',
    component: ChequeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
