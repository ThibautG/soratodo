import {Injectable} from '@angular/core';
import {Task} from '../models/task';

// Clé pour stocker dans localStorage
const TASKS_KEY = 'soraToDoTasks';

@Injectable ({
  providedIn: 'root'
})

export class TaskService {

  // on crée un tableau vide pour stocker les tâches
  private tasks: Task[] = [];

  // on charge les tâches depuis le localStorage au démarrage du service
  constructor() {
    this.loadTasks();
  }
  // méthode pour charger les tâches depuis localStorage
  private loadTasks() {
    const storedTasks = localStorage.getItem(TASKS_KEY);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    /*console.log(this.tasks)*/
  }
  // méthode pour sauvegarder les tâches dans le localStorage
  private saveTasks() {
    localStorage.setItem(TASKS_KEY, JSON.stringify(this.tasks));
  }

  // méthode pour récupérer la liste de tâches
  getTasks(): Task[] {
    // on retourne une copie du tableau pour travailler plus proprement dessus
    return [...this.tasks];
  }
  // méthode pour ajouter une tâche,
  // on prend bien une Task en entrée, mais on omit l'id et le status,
  // pas demandés dans le formulaire
  addTask(task: Omit<Task, 'id' | 'status'>): void {
    /*console.log(task)*/
    // on ajoute id et status "à faire" à la tâche du formulaire
    // TODO : faire une vérification si id présent dans tasks
    const newTask: Task = {
      ...task,
      id: crypto.randomUUID().substring(0, 8),
      status: "à faire"
    };
    // on push le tout dans le tableau tasks
    this.tasks.push(newTask);
    // on sauvegarde la nouvelle liste dans localStorage
    this.saveTasks();
  }
}
