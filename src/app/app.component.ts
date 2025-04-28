import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {TaskFormComponent} from './components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
