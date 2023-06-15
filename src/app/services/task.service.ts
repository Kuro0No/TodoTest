import { Injectable } from '@angular/core';
import { TaskModel } from '@app/models/task';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = new BehaviorSubject<TaskModel[]>([]);
    tasks$ = this.tasks.asObservable();


    constructor(
      private storage: StorageService
    ) { }

    addTask(task: TaskModel){
      this.tasks.value.push(task)
      this.tasks.next(this.tasks.value);
      this.storage.setStorage(this.tasks.value)
    }

    getAllTask(tasks : TaskModel[]){
      this.tasks.next(tasks)
    }

}
