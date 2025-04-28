import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [
    NgForOf
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  // on crée un tableau vide d'objets de type Task
  tasks!: Task[];


  // on crée une instance du service TaskService
  constructor(public taskService: TaskService) {  }

  // au chargement component on appelle la méthode getTasks
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    /*console.log(this.tasks)*/
  }
}
