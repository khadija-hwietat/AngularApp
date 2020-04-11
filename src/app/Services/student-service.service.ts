import { Injectable } from '@angular/core';
import { StudentModel } from '../studentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private Students: Array<StudentModel> = [{ "id": 1, "StudentName": "a", "Age": 100, "Gender": "female", "Active": true },
  { "id": 2, "StudentName": "b", "Age": 100, "Gender": "male", "Active": true },
  { "id": 3, "StudentName": "c", "Age": 100, "Gender": "female", "Active": false },];
 
  constructor() { }
  public getAll(): Array<StudentModel> {
    return this.Students;
  }
  public GetById (Id:number): StudentModel{
    return this.Students.find(x=>x.id==Id);
  }
}
