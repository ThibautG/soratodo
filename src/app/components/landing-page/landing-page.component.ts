import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  // on crée une instance du service Router pour navigation
  constructor(private router: Router) {}

  onContinue() {
    this.router.navigateByUrl('tasks/new')
  }
}
