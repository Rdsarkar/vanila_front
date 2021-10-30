import { Component, OnInit } from '@angular/core';
import { DeptModel } from './model/dept.model';
import { DeptService } from './service/dept.service';
import { Res } from './model/res.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  createDId: number | undefined;
  createDName: string | undefined;
  

  constructor(private deptService : DeptService) { }
  createDept: DeptModel[] = [];
  ngOnInit(): void {
    this.deptService.SobData().subscribe(
      (zafir) =>{
        this.createDept = zafir.payload;
      }
      
    );
  }

  createButtonClickKorlam() {
    let x: DeptModel = new DeptModel();
    x.dId = this.createDId ?? 0;
    x.dName = this.createDName ?? "";

    if (x.dId == 0) {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'Please fill up ID field '
      });
    }
    else if (x.dName == "") {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'Please fill up Name Field!'
      });
    }
    else {
      //server
      this.deptService.CreateKori(x).subscribe(
        (success) => {
          // window.location.reload();

          //client
          this.createDept.push(x);
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
