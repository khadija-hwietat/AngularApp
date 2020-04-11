import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/student-service.service';
import { StudentModel } from '../studentModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Array<StudentModel>
  constructor(private svc: StudentServiceService, private router: Router) {
    this.students = svc.getAll();
  }
  ngOnInit() {
  }
  handleOnEditClick(st: StudentModel) {
    this.router.navigate(['/StudentEdit/' + st.id]);
  }
}
