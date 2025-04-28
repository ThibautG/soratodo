import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';
import {NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {TaskDetailComponent} from '../task-detail/task-detail.component';

@Component({
  selector: 'app-task-list',
  imports: [
    NgForOf,
    NgIf,
    TitleCasePipe,
    TaskDetailComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  // on crée un tableau vide d'objets de type Task
  tasks!: Task[];


  // on crée une instance du service TaskService
  constructor(private taskService: TaskService) {  }

  // au chargement component, on appelle la méthode getTasks
  ngOnInit() {
    this.refreshTasks();
    /*console.log(this.tasks)*/
  }
  // Refresh affichage liste par méthode getTasks
  refreshTasks() {
    this.tasks = this.taskService.getTasks();
  }

  // Supprimer toutes les tâches
  onResetTasks() {
    /* TODO: remplacer les confirmations par des pop-up */
    const confirmation = window.confirm('Êtes-vous sûr de vouloir vider' +
      ' toute votre liste ?')

    if (confirmation) {
      this.taskService.clearStoredTasks();
      this.refreshTasks();
    }
  }

  // Supprimer une tâche au click
  onDeleteTask(taskId: string) {
    /* TODO: remplacer les confirmations par des pop-up */
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer' +
      ' cette tâche ?')

    if (confirmation) {
      this.taskService.removeTask(taskId);
      this.refreshTasks();
    }
  }

  // Modifier une tâche au click
  onModifyTask(taskId: string) {
    // idée = au click, on veut récupérer l'id et réutiliser le
    // TaskFormComponent pour l'utiliser afin de modifier la tâche
    // correspondant à taskId
  }

  //Afficher les détails d'une tâche
    // Variable pour stocker id si détails sont ouverts
  openedTaskId: string | null = null;
    // méthode pour modifier openedTaskId au click
  onDisplayDetail(taskId: string): void {
    this.openedTaskId = (this.openedTaskId === taskId) ? null : taskId;
  }
}
