import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Res } from '../../department/model/res.model';
import { CustomDetailsModel } from '../../details/models/customDetails.model';
import { DeptListModel } from '../models/detail-list.model'

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DetailListService {

  constructor(private httpClient: HttpClient) {

  }
  deptId: DeptListModel[] = [];
  baseUrl2: string = 'https://localhost:44349/api/Departments';
  AllDepts() {
    return this.httpClient.get<Res>(this.baseUrl2, headerOption);
  }
  // baseUrl3: string = 
  // DetailsCreate(x :){

  // }
}
