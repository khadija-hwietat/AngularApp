import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { StudentModel } from '../studentModel';

@Component({
  selector: 'app-student-recored',
  templateUrl: './student-recored.component.html',
  styleUrls: ['./student-recored.component.css']
})
export class StudentRecoredComponent implements OnInit {
 @Input() student:  StudentModel;
  @Output() onEditClick: EventEmitter<StudentModel> = new EventEmitter<StudentModel>();

  constructor() { }

  ngOnInit() {
  }
  OnEdit():void{
    this.onEditClick.emit(this.student)
  }
}
