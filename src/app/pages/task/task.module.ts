import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule, FormFieldModule, TextAreaModule, DateModule } from '@app/shared/controls';
import { SelectionModule } from '@app/shared/controls/selection/selection.module';
import { TaskService } from '@app/services/task.service';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    FormFieldModule,
    TextAreaModule,
    DateModule,
    SelectionModule
  ],
  exports: [
    TaskComponent
  ],
  providers: [TaskService]
})
export class TaskModule { }
