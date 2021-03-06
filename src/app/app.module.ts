import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './component/department/department.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DepartListComponent } from './component/depart-list/depart-list.component';
import { DetailsComponent } from './component/details/details.component';
import { DetailsCreateComponent } from './component/details-create/details-create.component';
import { SearchPipe } from './component/utils/search.pipe';
import { ChequeComponent } from './component/cheque/cheque.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DepartListComponent,
    DetailsComponent,
    DetailsCreateComponent,
    SearchPipe,
    ChequeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
