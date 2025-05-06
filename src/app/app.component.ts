import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionViewComponent } from './session-view/session-view.component';
import { TaskList } from './task-list';
import { TasksService } from './tasks.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root', 
  imports: [CommonModule, DashboardComponent, SessionViewComponent, RouterModule],
  template: `
    <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
  myTaskList: TaskList[] = [];
  taskService: TasksService = inject(TasksService);

  constructor() {
    this.myTaskList = this.taskService.getAllTasks();
  }
}
