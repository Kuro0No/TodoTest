import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail.component';
import { TaskModule } from '../task/task.module';
import { TaskService } from '@app/services/task.service';



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
  ],
  providers: [TaskService]
})
export class TaskDetailModule { }
