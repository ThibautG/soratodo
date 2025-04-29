import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {FormsModule} from '@angular/forms';
import {TaskStatusType} from '../../models/task-status-type.type';

@Component({
  selector: 'app-task-form',
  imports: [
    FormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
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



  // on appelle les services pour utiliser addTask
  constructor(private taskService: TaskService) {  }

  // on crée une méthode pour ajouter la nouvelle tâche depuis le form
  onSubmit() {
    /*console.log(this.newTask)*/
    //on s'assure qu'au moins le champ title est rempli
    if (this.newTask.title.trim()) {
      // on ajoute la nouvelle tâche
      this.taskService.addTask(this.newTask);
      // on réinitialise le formulaire
      this.newTask = {
        title: '',
        description: '',
        status: 'à faire'
      };

      // on recharge la page pour mettre à jour affichage liste
      window.location.reload();
    }
  }
}
