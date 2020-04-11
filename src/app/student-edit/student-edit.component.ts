import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../Services/student-service.service';
import { StudentModel } from '../studentModel';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: number;
  student: StudentModel;
  constructor(private route: ActivatedRoute, private svc: StudentServiceService) {
  }

  ngOnInit() {
    this.route.params.subscribe(x => {
      if (x['Id']) {
        this.id = +x['Id']
      }
    });
    this.student = this.svc.GetById(this.id);
  }

}
