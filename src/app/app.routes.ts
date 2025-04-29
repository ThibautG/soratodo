import { Routes } from '@angular/router';
import {
  LandingPageComponent
} from './components/landing-page/landing-page.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskFormComponent} from './components/task-form/task-form.component';
import {
  TaskDetailComponent
} from './components/task-detail/task-detail.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'tasks/new', component: TaskFormComponent},
  {path: 'tasks/:id', component: TaskDetailComponent},
  {path: 'tasks/:id/edit', component: TaskFormComponent}
  /* TODO: penser à utiliser route tasks/:id pour TaskDetailComponent */
];
