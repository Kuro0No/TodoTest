import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models';
import { TaskModel } from '@app/models/task';
import { TaskService } from '@app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [DatePipe]
})
export class TaskComponent implements OnInit {

  today = this.datePipe.transform(new Date(), 'yyyy-MM-dd')

  formGroup: FormGroup = new FormGroup({});
  priorities: ControlItem[] = [
    {
      label: 'Low',
      value: 'low'
    },
    {
      label: 'Normal',
      value: 'normal'
    },
    {
      label: 'High',
      value: 'high'
    },
  ]

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private taskService: TaskService
  ){}

  ngOnInit(): void {
    this.initForm()

  }

  initForm(){
    this.formGroup = this.fb.group({
      taskTitle: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: []
    })
  }

  onAdd(){
    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched()
    }else{
      let newTask = new TaskModel(this.formGroup.getRawValue());
      this.taskService.addTask(newTask);
    }


  }

}
