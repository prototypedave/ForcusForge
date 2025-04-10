import {Component} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionViewComponent } from './session-view/session-view.component';

@Component({
  selector: 'app-root', 
  imports: [SessionViewComponent],
  template: `
    <main>
      <section class="content">
        <app-session-view></app-session-view>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}