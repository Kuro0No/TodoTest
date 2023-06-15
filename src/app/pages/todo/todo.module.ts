import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { InputModule } from '@app/shared';
import { TaskDetailModule } from '../task-detail/task-detail.module';
import { TaskService } from '@app/services/task.service';



@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    TaskDetailModule
  ],
  exports: [
    TodoComponent
  ],
  providers: [TaskService]
})
export class TodoModule { }
