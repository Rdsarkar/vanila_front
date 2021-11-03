import { Component, OnInit } from '@angular/core';
import { CustomDetailsModel } from './models/customDetails.model';
import { DeptModel } from '../department/model/dept.model'
import { DetailService } from './services/detail.service';
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
  

}
