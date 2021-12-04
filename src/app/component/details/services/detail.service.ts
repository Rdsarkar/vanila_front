import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomDetailsModel } from '../models/customDetails.model';
import { Res } from './../models/res.model';
import { DetailAllModel } from '../models/detailsAll.model';
import { DetailDeleteModel } from '../models/detailsDelete.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient: HttpClient) {

  }
  baseurl: string = 'https://localhost:44349/api/Details/AllDetails';
  AllDetails() {
    return this.httpClient.get<Res>(this.baseurl, headerOption);
  }
  baseUrl2: string = 'https://localhost:44349/api/Departments';
  AllDepts(){
    return this.httpClient.get<Res>(this.baseUrl2, headerOption);
  }

  baseUrl5: string = 'https://localhost:44349/api/Details/UpdateAllDetails';
  UpdateDetails(y: CustomDetailsModel) {
    return this.httpClient.post<Res>(this.baseUrl5, y, headerOption);
  }
  baseUrl4: string = 'https://localhost:44349/api/Details/DeleteData';

  DeleteDetails(x: DetailDeleteModel) {
    return this.httpClient.post<Res>(this.baseUrl4, x, headerOption);
  }
  ApiThekeSearchKorlam(x: any) {
    let amarBody = {
      j: x
    }
    return this.httpClient.post<any>("https://localhost:44349/api/Details/MultiColumnSearch", amarBody, headerOption);
  }

  ApiThekeSobDetailsAnlam() {
    return this.httpClient.get<any>("https://localhost:44349/api/Details/AllDetails2", headerOption);
  }
}
