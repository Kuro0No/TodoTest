import { Component, Input } from '@angular/core';
import { TaskModel } from '@app/models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  isShowDetail = false
  @Input() task: TaskModel = new TaskModel()
  showDetail(){
    this.isShowDetail = !this.isShowDetail
  }
}
