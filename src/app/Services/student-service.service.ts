import { Injectable } from '@angular/core';
import { StudentModel } from '../studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private Students: Array<StudentModel>;
  constructor() { }
  public getAll(): Array<StudentModel> {
    this.Students = [{ "id": 1, "StudentName": "a", "Age": 100, "Gender": "female", "Active": true },
    { "id": 1, "StudentName": "b", "Age": 100, "Gender": "male", "Active": true },
    { "id": 1, "StudentName": "c", "Age": 100, "Gender": "female", "Active": false },]
    return this.Students;
  }
}
