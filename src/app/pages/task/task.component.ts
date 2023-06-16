import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models';
import { TaskModel } from '@app/models/task';
import { TaskService } from '@app/services/task.service';

export type Mode = 'update' | 'add';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [DatePipe]
})
export class TaskComponent implements OnInit {

  @Input() taskDetail: TaskModel = new TaskModel();
  @Input() mode: Mode = 'add';

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
    this.initForm(this.taskDetail)

  }

  initForm(taskDetail: TaskModel){
    this.formGroup = this.fb.group({
      id: [taskDetail.id],
      taskTitle: [taskDetail.taskTitle, Validators.required],
      description: [taskDetail.description, Validators.required],
      dueDate: [taskDetail.dueDate, Validators.required],
      priority: [taskDetail.priority],
      isChecked: [taskDetail.isChecked]
    })
  }

  onSubmit(){
    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched()
    }else{
      if(this.mode === 'update'){
        this.taskService.updateTask(this.formGroup.getRawValue())
      }else{
        let newTask = new TaskModel(this.formGroup.getRawValue());
        this.taskService.addTask(newTask);
      }
    }


  }

}
