import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Res } from '../model/res.model';
import { DeptModel } from '../model/dept.model';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeptService {
 

  constructor(private httpClient:HttpClient ) { }
  
  baseUrl: string = 'https://localhost:44349/api/Departments';
  SobData() {
    return this.httpClient.get<Res>(this.baseUrl, headerOption);
  }
  CreateKori(x: DeptModel) {
    return this.httpClient.post<Res>(this.baseUrl + "/InsertNewData", x, headerOption);
  }
  UpateKori(y: DeptModel) {
    return this.httpClient.post<Res>(this.baseUrl + "/UpdateData", y, headerOption);
  }
  DeleteKori(x: DeptModel) {
    return this.httpClient.post<Res>(this.baseUrl + "/DeleteData", x, headerOption);
  }

}
