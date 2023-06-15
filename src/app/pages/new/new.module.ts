import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new.component';
import { TaskModule } from '../task/task.module';



@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    TaskModule
  ],
  exports: [
    NewComponent
  ]
})
export class NewModule { }
