import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {FormsModule} from '@angular/forms';
import {TaskStatusType} from '../../models/task-status-type.type';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Task} from '../../models/task';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-task-form',
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit{
  // on crée une tâche qui va recevoir ce qu'on entre dans le form
  newTask: {
    title: string;
    description: string;
    status: TaskStatusType;
  } = {
    title: '',
    description: '',
    status: 'à faire'
  };

  // Booléen pour annoncer si mode Edit ou non
  isEditMode: boolean = false;
  // string pour stocker l'id si présent dans url
  taskId: string | null = null;
  // variable pour stocker message d'ajout ou modif
  successMessage: string | null = null;
  // booléen selon si tâche en url existe ou pas
  taskNotFound: boolean = false;

  // on appelle les services
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
    ) {  }

  ngOnInit(): void {
    // stocker l'id présent dans la route
    this.taskId = this.route.snapshot.params['id'];

    if (this.taskId) {
      // si il y a un id dans la route, on va chercher la tâche correspondante
      const  existingTask: Task = this.taskService.getTaskById(this.taskId);

      if (existingTask) {
        // s'il y a une tâche correspondante, on vient charger ses
        // propriétés dans newTask
        this.newTask = {
          title: existingTask.title,
          description: existingTask.description,
          status: existingTask.status
        };
        // et on "valide" passage en "mode édition"
        this.isEditMode = true;
      } else {
        // s'il n'y a pas de tâche correspondante on switch taskNotFound
        this.taskNotFound = true;
        // et on repasse en "mode création"
        this.isEditMode = false;
      }
    }
  }

  // on crée une méthode pour ajouter la nouvelle tâche depuis le form
  onSubmit(): void {
    /*console.log(this.newTask)*/
    //on s'assure qu'au moins le champ title est rempli
    if (this.newTask.title.trim()) {
      if (this.isEditMode && this.taskId) {
        // si on est en mode edit et qu'on a bien un id dans url
        this.taskService.updateTask(this.taskId, this.newTask);
        this.successMessage = 'Tâche modifiée avec succès !';
      } else {
        // sinon, on ajoute la nouvelle tâche
        this.taskService.addTask(this.newTask);
        this.successMessage = 'Tâche ajoutée avec succès !';
      }
      // Après 1,5 seconde, on navigue vers la route de la liste
      setTimeout(() => {
        this.router.navigateByUrl('tasks');
      }, 1500);

    }
  }
}
