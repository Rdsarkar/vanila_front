import { Component, OnInit } from '@angular/core';
import { Res } from '../department/model/res.model';
import { CustomDetailsModel } from './models/customDetails.model';
import { DeptModel } from '../department/model/dept.model'
import { DetailService } from './services/detail.service';
import { DetailDeleteModel } from './models/detailsDelete.model';
import { DetailAllModel } from './models/detailsAll.model';
import { CustomDetailsNameModel } from './models/customDetailsName.model';
import { DetailsCreateService } from '../details-create/services/details-create.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private detailService: DetailService, private lol: DetailsCreateService) { }
 
  allDepts: DeptModel[] = [];
  allDetailsName : CustomDetailsNameModel[] = [];
  allDetails: CustomDetailsModel[] = [];
  //allDepts: DeptModel[] = [];
  ngOnInit(): void {
  
    this.detailService.AllDetails().subscribe(
      (data) => {
        this.allDetails = data.payload;
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
  updateDetailsName(x : DetailAllModel){
    this.detailService.UpdateDetailsName(x).subscribe(
      (success) => {
        for(let gg of this.allDetails){
          if(gg.id === x.id){
            // this.allDetails[this.allDetails.indexOf(gg) ]=x;
            break;
          }
        }
      }
      
    )
  }

  deleteDetails(x: number){
    let k: DetailDeleteModel= new DetailDeleteModel();
    k.id = x;
    this.detailService.DeleteDetails(k).subscribe(
      (payload) => {
        //this.allDetails = payload.payload;
        for(let aaa of this.allDetails){
        if (aaa.id == x) {
          this.allDetails.splice(this.allDetails.indexOf(aaa), 1);
          break;
          
        }
      }
      }
    );
  }




}
