import {Component, OnInit} from '@angular/core';
import {Task} from '../../models/task';
import {NgIf} from '@angular/common';
import {TaskService} from '../../services/task.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit{
  // string pour stocker l'id si présent dans url
  taskId: string | null = null;
  // task pour stocker la tâche correspondante
  task: Task | undefined;
  // un booléen pour cas où tâche non existante
  taskNotFound: boolean = false;

  // on appelle les services
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    // au chargement, on récupère l'id dans url
    this.taskId = this.route.snapshot.params['id'];

    if (this.taskId) {
      // ensuite, on récupère la tâche associée
      this.task = this.taskService.getTaskById(this.taskId)
    } else {
      // s'il n'y a pas de tâche correspondante on switch taskNotFound
      this.taskNotFound = true;
    }
  }

  // Supprimer une tâche au click
  onDeleteTask(taskId: string) {
    /* TODO: remplacer les confirmations par des pop-up
    *   idée : une première méthode pour afficher une div qui contient le
    *   bouton qui lui seulement appelle onDeleteTask */
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer' +
      ' cette tâche ?')

    if (confirmation) {
      this.taskService.removeTask(taskId);
      this.router.navigateByUrl(`tasks`)    }
  }

  // Modifier une tâche au click
  onModifyTask(taskId: string): void {
    // au click, on navigue vers la route de modif
    this.router.navigateByUrl(`tasks/${taskId}/edit`)
  }
}
