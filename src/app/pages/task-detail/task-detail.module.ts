import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail.component';
import { TaskModule } from '../task/task.module';



@NgModule({
  declarations: [
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    TaskModule
  ],
  exports: [
    TaskDetailComponent
  ]
})
export class TaskDetailModule { }
