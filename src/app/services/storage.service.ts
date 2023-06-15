import { Injectable } from '@angular/core';
import { TaskModel } from '@app/models/task';

@Injectable({providedIn: 'root'})
export class StorageService {
  constructor() { }

  setStorage(value: TaskModel[]){
    localStorage.setItem('Task', JSON.stringify(value))
  }

  getStorage(key: string){
    let tasks: TaskModel[] = [];
    let storageData = localStorage.getItem(key)
    if(storageData){
      tasks = JSON.parse(storageData)
    }
    return tasks
  }

}
