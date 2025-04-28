import {Component, Input} from '@angular/core';
import {Task} from '../../models/task';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-task-detail',
  imports: [
    LowerCasePipe
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent {
  // on reçoit une tâche depuis l'élément parent
  @Input() task!: Task;

}
