import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRecoredComponent } from './student-recored/student-recored.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
  { path: 'Student', component: StudentComponent },
  { path: 'Teacher', component: TeacherComponent },
  { path: 'StudentList', component: StudentListComponent },
  { path: 'StudentEdit/:Id', component: StudentEditComponent },
  { path: 'StudentEdit', component: StudentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
