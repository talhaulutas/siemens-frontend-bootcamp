import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildProductComponent } from './input-output/components/child-product/child-product.component';
import { ChildStudentDetailComponent } from './input-output/components/child-student-detail/child-student-detail.component';
import { ParentStudentComponent} from './input-output/components/parent-student/parent-student.component';
import { StudentRepository } from './input-output/student-repository';
import { studentService } from './input-output/student-service';



@NgModule({
  declarations: [
    AppComponent,
    ParentStudentComponent,
    ChildProductComponent,
    ChildStudentDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
