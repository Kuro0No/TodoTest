import { v4 as uuidv4 } from 'uuid';

export type Priority = 'low' | 'normal' | 'high'

export interface ITaskModel{
  taskTitle: string;
  description: string;
  dueDate: string;
  priority: Priority;
}

export class TaskModel implements ITaskModel{
  id: string = ''
  taskTitle: string = ''
  description: string = ''
  dueDate: string = ''
  priority: Priority = 'normal'

  constructor(data?: ITaskModel){
    this.id = uuidv4();
    this.taskTitle = data?.taskTitle || '';
    this.description = data?.description || '';
    this.dueDate = data?.dueDate || '';
    this.priority = data?.priority || 'low' ;
    return this;
  }
}
