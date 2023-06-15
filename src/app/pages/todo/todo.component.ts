import { Component, OnInit } from '@angular/core';
import { TaskModel } from '@app/models/task';
import { TaskService } from '@app/services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  taskList$: Observable<TaskModel[] | []> = new Observable<TaskModel[] | []>;

  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(): void {
    this.taskList$ = this.taskService.tasks$
  }

}
