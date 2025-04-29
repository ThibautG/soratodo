import {Injectable} from '@angular/core';
import {Task} from '../models/task';

// Clé pour stocker dans localStorage
const TASKS_KEY = 'soraToDoTasks';

@Injectable ({
  providedIn: 'root'
})

export class TaskService {
  // Création tableau vide pour stocker tâches
  private tasks: Task[] = [];

  // Charger tâches depuis localStorage au démarrage du service
  constructor() {
    this.loadTasks();
  }
  // Charger tâches depuis localStorage
  private loadTasks() {
    const storedTasks = localStorage.getItem(TASKS_KEY);
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    /*console.log(this.tasks)*/
  }
  // Sauvegarder tâches dans le localStorage
  private saveTasks() {
    localStorage.setItem(TASKS_KEY, JSON.stringify(this.tasks));
  }
  // Vider localStorage
  clearStoredTasks(): void {
    localStorage.removeItem(TASKS_KEY);
    // on vide aussi le tableau en mémoire
    this.tasks = [];
  }



  // Récupérer liste des tâches
  getTasks(): Task[] {
    // on retourne une copie du tableau pour travailler plus proprement dessus
    return [...this.tasks];
  }

  // Récupérer une tâche par son id
  getTaskById (taskId: string): Task[] {
    return this.tasks.filter(task => task.id === taskId);
  }

  // Ajouter une tâche,
    // on prend une Task en entrée, on omit l'id pas demandé dans form
  addTask(task: Omit<Task, 'id'>): void {
    /*console.log(task)*/
    // on ajoute id et status "à faire" à la tâche du formulaire
    // TODO : faire une vérification si id présent dans tasks
    const newTask: Task = {
      ...task,
      // TODO: fabriquer un id auto-incrémenté
      id: crypto.randomUUID().substring(0, 8)
    };
    // on push le tout dans le tableau tasks
    this.tasks.push(newTask);
    // on sauvegarde la nouvelle liste dans localStorage
    this.saveTasks();
  }

  // Mettre à jour une tâche

  // Supprimer un tâche
  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

}
