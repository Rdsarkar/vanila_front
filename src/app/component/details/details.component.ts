import { Component, OnInit } from '@angular/core';
import { Res } from '../department/model/res.model';
import { CustomDetailsModel } from './models/customDetails.model';
import { DeptModel } from '../department/model/dept.model'
import { DetailService } from './services/detail.service';
import { DetailDeleteModel } from './models/detailsDelete.model';
import { DetailAllModel } from './models/detailsAll.model';
import { CustomDetailsNameModel } from './models/customDetailsName.model';
import { DetailsCreateService } from '../details-create/services/details-create.service';
import { SearchPipe } from '../utils/search.pipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  searchName: string = "";
  constructor(private detailService: DetailService, private lol: DetailsCreateService) { }

  allDepts: DeptModel[] = [];
  allDetailsName: CustomDetailsNameModel[] = [];
  allCBackupDetails: CustomDetailsModel[] = [];
  allCDetails: CustomDetailsModel[] = [];

  ekaneSearchResultRaklam: any[] = [];

  //allDepts: DeptModel[] = [];
  ngOnInit(): void {
    this.detailService.ApiThekeSearchKorlam("").subscribe(
      (responseTikAse) => {
        this.ekaneSearchResultRaklam = responseTikAse.payload;
      },
      (responseTikNai) => {
        this.ekaneSearchResultRaklam = responseTikNai.error.payload;
      }
    );
    this.detailService.AllDetails().subscribe(
      (data) => {
        this.allCDetails = data.payload;
        this.allCBackupDetails = data.payload;
      }
    )

    this.lol.DeptInput().subscribe(
      (success) => {
        console.log("test");
        console.log(success);


        this.allDepts = success.payload;

      }
    );



  }
  updateDetails(x: CustomDetailsModel) {
    let updateModel: CustomDetailsModel = new CustomDetailsModel();
    updateModel.id = x.id ?? "";
    updateModel.name = x.name ?? "";
    updateModel.dName = x.dName ?? "";
    updateModel.dId = this.allDepts.find(y => y.dName == x.dName)?.dId;

    this.detailService.UpdateDetails(updateModel).subscribe(
      (success) => {
        for (let gg of this.allCDetails) {
          if (gg.id === x.id) {
            this.allCDetails[this.allCDetails.indexOf(gg)] = x;
            break;
          }
        }
      }

    )
  }

  deleteDetails(x: number) {
    let k: DetailDeleteModel = new DetailDeleteModel();
    k.id = x;
    this.detailService.DeleteDetails(k).subscribe(
      (payload) => {
        //this.allDetails = payload.payload;
        for (let aaa of this.allCDetails) {
          if (aaa.id == x) {
            this.allCDetails.splice(this.allCDetails.indexOf(aaa), 1);
            break;

          }
        }
      }
    );
  }

  searchDetails() {
    this.allCDetails = new SearchPipe().transform(this.allCBackupDetails, 'name', this.searchName);
    if (this.allCDetails.length === 0) {
      this.allCDetails = this.allCBackupDetails;
    }
  }

  searchDetailsVALKFromAPI() {
    this.detailService.ApiThekeSearchKorlam(this.searchName).subscribe(
      (responseTikAse) => {
        this.ekaneSearchResultRaklam = responseTikAse.payload;
      },
      (responseTikNai) => {
        this.ekaneSearchResultRaklam = responseTikNai.error.payload;
      }
    );
  }




}
