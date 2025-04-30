# Soratodo – Application de gestion de tâches

Ce projet a été généré en utilisant [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

**SoraTodo** est une application web développée avec Angular permettant de gérer une liste de tâches de manière simple et efficace.

Ce projet a été réalisé dans le cadre d’un test technique pour démontrer la capacité à structurer une application Angular avec gestion d’état, services, routing et composants modulaires.

## Fonctionnalités

- Création, visualisation, modification et suppression de tâches
- Gestion des statuts : **à faire**, **en cours**, **terminée**
- Interface claire et formulaires validés
- Confirmation avant suppression
- Style personnalisé avec SCSS
- Sauvegarde des tâches dans le `localStorage` du navigateur

## Installation

Assurez-vous d’avoir **Node.js** et **Angular CLI** installés sur votre machine.

```bash
npm install -g @angular/cli
```

Clonez le projet puis installez les dépendances :
```bash
git clone https://github.com/ThibautG/soratodo.git
cd soratodo
npm install
```

## Lancement de l'application
Démarrez le serveur de développement avec :
```bash
ng serve
```
Puis rendez-vous sur [http://localhost:4200](http://localhost:4200) pour utiliser l'application.

## Navigation
L'application utilise le routing Angular avec les routes suivantes :
- `/tasks` : liste des tâches
- `/tasks/new` : création d’une tâche
- `/tasks/:id` : détails d’une tâche
- `/tasks/:id/edit` : modification d’une tâche

## Structure du projet
- `models/Task` : interface des tâches
- `models/TaskStatusType` : type personnalisé pour restreindre les statuts possibles d'une tâche
- `services/TaskService` : gestion des tâches en mémoire (avec stockage dans `localStorage`)
- `components/Header` : composant d’en-tête avec navigation
- `components/LandingPage` : page d’accueil de l’application
- `components/TaskListComponent` : affichage de la liste
- `components/TaskDetailComponent` : vue d’une tâche
- `components/TaskFormComponent` : formulaire de création/édition

## Améliorations possibles
Voici quelques pistes d'évolution si le projet devait être poussé plus loin :
- Améliorer la responsivité pour mobile et tablettes
- Remplacer `window.confirm()` par une pop-up de confirmation personnalisée
- Appliquer du style dynamiquement avec `[ngStyle]` en fonction du statut de la tâche