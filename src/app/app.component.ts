import {Component} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root', 
  imports: [DashboardComponent],
  template: `
    <main>
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