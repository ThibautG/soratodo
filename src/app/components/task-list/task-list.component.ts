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
  constructor(private taskService: TaskService) {  }

  // au chargement component on appelle la méthode getTasks
  ngOnInit() {
    this.refreshTasks();
    /*console.log(this.tasks)*/
  }
  // Refresh affichage liste par méthode getTasks
  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

  // Supprimer une tâche au click
  onDeleteTask(taskId: string) {
    this.taskService.removeTask(taskId);
    this.refreshTasks();
  }

  // Supprimer toutes les tâches
  onResetTasks() {
    this.taskService.clearStoredTasks();
    this.refreshTasks();
  }
}
