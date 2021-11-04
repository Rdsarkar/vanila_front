import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Res } from '../../department/model/res.model';
import { CustomDetailsModel } from '../../details/models/customDetails.model';
// import { DeptListModel } from '../models/detail-list.model';
import { DetailListModel } from '../models/detail-list.model';
import { DeptModel } from '../../department/model/dept.model';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DetailListService {

  constructor(private httpClient: HttpClient) {

  }
  deptId: DeptModel[] = [];
  baseUrl2: string = 'https://localhost:44349/api/Departments';
  AllDepts() {
    return this.httpClient.get<Res>(this.baseUrl2, headerOption);
  }

 

  CreateDetails(x: DetailListModel) {
    return this.httpClient.post<Res>(this.baseUrl2, x, headerOption);
  }
  baseUrl3: string ='https://localhost:44349/api/Details/UpdateAllDetails';
  UpdateDetails(x: number, y: DetailListModel) {
    return this.httpClient.post<Res>(this.baseUrl3, x, headerOption);
  }

  DeleteDetails() {
    return this.httpClient.get<Res>(this.baseUrl2, headerOption);
  }

}
