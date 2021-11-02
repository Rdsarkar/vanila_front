import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomDetailsModel } from '../models/customDetails.model';
import { Res } from './../models/res.model';

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
  // baseUrl2: string = 'https://localhost:44349/api/Departments';
  // AllDepts(){
  //   return this.httpClient.get<Res>(this.baseUrl2, headerOption);
  // }
}
