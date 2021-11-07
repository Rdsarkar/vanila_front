import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Res } from '../../department/model/res.model';
import { DetailAllModel } from '../../details/models/detailsAll.model';
import { DeptModel } from '../../department/model/dept.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DetailsCreateService {

  constructor(private httpClient: HttpClient) { }

  baseUrl5: string = 'https://localhost:44349/api/Details/CreateDetails';
  CreateDetails(x: DetailAllModel) {
    return this.httpClient.post<Res>(this.baseUrl5, x, headerOption);
  }

  baseUrl12: string =  'https://localhost:44349/api/Departments';
 
  DeptInput() {
    return this.httpClient.get<Res>(this.baseUrl12, headerOption);
  }
}
