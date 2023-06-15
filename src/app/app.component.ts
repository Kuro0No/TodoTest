import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'SoTa-Todo';

  constructor(
    private storage: StorageService,
    private taskService: TaskService
  ){ }

  ngOnInit(): void {
    let tasks = this.storage.getStorage('Task')
    this.taskService.getAllTask(tasks)
  }


}
