import { Component, OnInit } from '@angular/core';
import { DeptModel } from '../department/model/dept.model';
import { DetailsCreateService } from './services/details-create.service';
import { DetailAllModel } from '../details/models/detailsAll.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details-create',
  templateUrl: './details-create.component.html',
  styleUrls: ['./details-create.component.css']
})
export class DetailsCreateComponent implements OnInit {
  createDetailsId: number | undefined;
  createDetailsName: string | undefined;
  createDetailsdId: number | undefined;

  constructor(private detailsCreateService: DetailsCreateService) { }
  arrayDetails: DetailAllModel[] = [];
  deptArray: DeptModel[] = [];
  ngOnInit(): void {
    this.detailsCreateService.DeptInput().subscribe(
      (success) => {
        console.log("test");
        console.log(success);


        this.deptArray = success.payload;
      },
      (error) => {
        console.log("error hoise");

      }
    );
  }

  createDetailsButton() {
    let x: DetailAllModel = new DetailAllModel();
    x.id = this.createDetailsId ?? 0;
    x.name = this.createDetailsName ?? "";
    x.dId = this.createDetailsdId ?? 0;
    if (x.id == 0) {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'Please fill up ID field '
      });
    }
    else if (x.name == "") {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'Please fill up Name Field!'
      });
    }
    else if (x.dId == 0) {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'Please fill up Name Field!'
      });
    }
    else {
    this.detailsCreateService.CreateDetails(x).subscribe(
      (success) => {
      this.arrayDetails.push(x);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'create Done!'
      });
    },
    (error) => {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'There is some error so No data Inserted!'
      });
    }
    );
  }
  }
}
