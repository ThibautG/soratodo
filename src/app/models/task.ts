import {TaskStatusType} from './task-status-type.type';

export interface Task {
  id: string;
  title: string,
  description: string,
  status: TaskStatusType
}
