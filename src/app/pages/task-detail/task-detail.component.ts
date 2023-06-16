import { Component, Input } from '@angular/core';
import { TaskModel } from '@app/models/task';
import { TaskService } from '@app/services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  isShowDetail = false
  @Input() task: TaskModel = new TaskModel()

  constructor(
    private taskService: TaskService
  ){}

  showDetail(){
    this.isShowDetail = !this.isShowDetail
  }

  onCheckedChange(event: Event, id: string){
    let element = event.target as HTMLInputElement
    this.taskService.checkedChange(element.checked, id)
  }

  onRemove(taskId: string){
    this.taskService.removeTask(taskId)
  }
}
