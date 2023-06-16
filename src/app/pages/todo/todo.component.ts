import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskModel } from '@app/models/task';
import { TaskService } from '@app/services/task.service';
import { Observable, debounce, debounceTime, pipe, switchMap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  taskList$: Observable<TaskModel[] | []> = new Observable<TaskModel[] | []>();
  taskList: TaskModel[] = [];
  isBulkAction: boolean = false;
  searchControl = new FormControl('');

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe((response) => {
      this.taskList = response;
    });

    this.taskService.tasks$.subscribe((response) => {
      if (response.find((x) => x.isChecked === true)) {
        this.isBulkAction = true;
      } else {
        this.isBulkAction = false;
      }
    });

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((query) => this.taskService.findTasks(query))
      )
      .subscribe((response) => {
        this.taskList = response;
      });
  }

  bulkRemove() {
    this.taskService.bulkDelete();
  }
}
