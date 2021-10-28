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
    x.DId = this.createDId ?? 0;
    x.DName = this.createDName ?? "";

    if (x.DId == 0) {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'id vul ase, tik na korle ghushi khaben!'
      });
    }
    else if (x.DName == "") {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'name vul ase, tik na korle ghushi khaben!'
      });
    }
    else {
      //server
      this.deptService.CreateKori(x).subscribe(
        (zafir) => {
          // window.location.reload();

          //client
          this.createDept.push(x);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'create hoise!'
          });

        },
        (lol) => {
          Swal.fire({
            icon: 'error',
            title: 'error hoise',
            text: 'Onek error hoise, tik na korle ghushi khaben!'
          });
        }
      );
    }

  }

}
