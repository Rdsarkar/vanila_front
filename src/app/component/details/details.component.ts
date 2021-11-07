import { Component, OnInit } from '@angular/core';
import { Res } from '../department/model/res.model';
import { CustomDetailsModel } from './models/customDetails.model';
import { DeptModel } from '../department/model/dept.model'
import { DetailService } from './services/detail.service';
import { DetailDeleteModel } from './models/detailsDelete.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private detailService: DetailService) { }
 
  allDetails: CustomDetailsModel[] = [];
  //allDepts: DeptModel[] = [];
  ngOnInit(): void {
  
    this.detailService.AllDetails().subscribe(
      (data) => {
        this.allDetails = data.payload;
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
