import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule ,FormGroup } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentServiceService } from './Services/student-service.service';
import { StudentRecoredComponent } from './student-recored/student-recored.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentRecoredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  public test(t : FormGroup):void{

    
  }

}
