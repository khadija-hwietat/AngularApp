import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  { path: 'Student', component: StudentComponent },
  { path: 'Teacher', component: TeacherComponent },
  { path: 'StudentList', component: StudentListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
