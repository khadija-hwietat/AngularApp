import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { StudentModel } from '../studentModel';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Array<StudentModel>
  constructor(private svc: StudentServiceService) {
    this.students = svc.getAll();
  }
  ngOnInit() {
  }

}
