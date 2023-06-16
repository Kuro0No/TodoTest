import { Injectable } from '@angular/core';
import { TaskModel } from '@app/models/task';
import { BehaviorSubject, Observable, delay, map, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = new BehaviorSubject<TaskModel[]>([]);
    tasks$ = this.tasks.asObservable();


    constructor(
      private storage: StorageService
    ) { }

    getCurrentTasks(){
      return this.tasks.value;
    }

    addTask(task: TaskModel){
      let currentTasks = this.getCurrentTasks();
      currentTasks.push(task)
      this.tasks.next(currentTasks);
      this.storage.setStorage(currentTasks)
    }

    updateTask(task: TaskModel){
      let currentTasks = this.getCurrentTasks();
      let index = currentTasks.findIndex(x => x.id === task.id)
      if(index >= 0){
        currentTasks[index] = task
      }
      this.tasks.next(currentTasks);
      this.storage.setStorage(currentTasks)
    }

    removeTask(taskId: string){
      let currentTasks = this.getCurrentTasks();
      let index = currentTasks.findIndex(x => x.id === taskId)
      currentTasks.splice(index, 1);
      this.tasks.next(currentTasks);
      this.storage.setStorage(currentTasks)
    }


    getAllTask(tasks : TaskModel[]){
      this.tasks.next(tasks)
    }

    checkedChange(isChecked: boolean, id: string){
      let currentTasks = this.getCurrentTasks();
      let task = currentTasks.find(x => x.id === id);
      if(task){
        task.isChecked = isChecked
        this.tasks.next(currentTasks)
      }
    }

    bulkDelete(){
      let currentTasks = this.getCurrentTasks();
      let removeTasks = currentTasks.filter(x => x.isChecked === true);
      removeTasks.forEach(item => {
        let index = currentTasks.findIndex(x => x.id === item.id)
        currentTasks.splice(index, 1)
      })

      this.tasks.next(currentTasks)
      this.storage.setStorage(currentTasks)
    }

    findTasks(searchTerm: string | null): Observable<TaskModel[]>{
      return of(this.getCurrentTasks()).pipe(
          delay(1000),
          map(data => {
              if(!searchTerm) return this.getCurrentTasks();
              let result = data.filter(x => x.description.toLocaleLowerCase().includes(searchTerm) ||
                                x.taskTitle.toLocaleLowerCase().includes(searchTerm))
              return result
          })
      )
    }

}
