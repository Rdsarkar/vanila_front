import { Component, OnInit } from '@angular/core';
import { DeptService } from '../department/service/dept.service';
import { DeptModel } from '../department/model/dept.model'
import { Res } from '../department/model/res.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-depart-list',
  templateUrl: './depart-list.component.html',
  styleUrls: ['./depart-list.component.css']
})
export class DepartListComponent implements OnInit {

  constructor(private deptService: DeptService) { }
  createDept: DeptModel[] = [];
  ngOnInit(): void {
    this.deptService.SobData().subscribe(
      (data) => {
        this.createDept = data.payload;
        // console.log ('data', this.createDept)
      }
    );
  }


  updateButtonClickKorlam(x: DeptModel) {
    console.log("id : " + x.dId);
    console.log("name : " + x.dName);

    if (x.dId == 0) {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'Please Fillup ID field'
      });
    }
    else if (x.dName == "") {
      Swal.fire({
        icon: 'error',
        title: 'error hoise',
        text: 'Please Fillup Name Field'
      });
    }
    else {
      let updateKorarModel: DeptModel = new DeptModel();
      updateKorarModel.dId = x.dId ?? 0;
      updateKorarModel.dName = x.dName ?? "";
      //server
      this.deptService.UpateKori(updateKorarModel).subscribe(
        (success) => {
          for (let fff of this.createDept) {
            if (fff.dId === x.dId) {
              this.createDept[this.createDept.indexOf(fff)] = x;
              Swal.fire({
                icon: 'success',
                title: 'Success hoise',
                text: 'Data Upadated'
              });
              break;
            }
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'error hoise',
            text: 'Error Thats why NO updates'
          });
        }
      );
    }
  }


  deleteButtonClickKorlam(x: number) {
    let k: DeptModel = new DeptModel();
    k.dId = x;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        //server
        this.deptService.DeleteKori(k).subscribe(
          (success) => {
            // window.location.reload();
            //client
            for (let aaa of this.createDept) {
              if (aaa.dId == x) {
                this.createDept.splice(this.createDept.indexOf(aaa), 1);

                Swal.fire({
                  icon: 'success',
                  title: 'Success',
                  text: 'Delete Done!'
                });
                break;
              }
            }
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops!',
              text: 'There is an Error! Delete cant be done'
            });
          }
        );
      }
    })
  }

}
