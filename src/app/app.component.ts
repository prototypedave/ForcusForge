import {Component} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root', 
  imports: [DashboardComponent],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-dashboard></app-dashboard>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}