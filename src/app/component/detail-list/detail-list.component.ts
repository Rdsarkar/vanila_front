import { Component, OnInit } from '@angular/core';
import {DetailListModel} from './models/detail-list.model';
import {DetailDeleteModel} from './models/detailDelete.model';
import { DetailListService } from './service/detail-list.service';


@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  constructor(private detailListService:DetailListService) { }
  allDetails : DetailListModel[] = [];
  ngOnInit(): void {
  }
  DeleteDetails(x: number){
    let k: DetailDeleteModel= new DetailDeleteModel();
    k.id = x;
    this.detailListService.DeleteDetails(k).subscribe(
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
