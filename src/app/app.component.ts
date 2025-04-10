import {Component, inject} from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionViewComponent } from './session-view/session-view.component';
import { TaskList } from './task-list';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root', 
  imports: [DashboardComponent, SessionViewComponent],
  template: `
    <main>
      <section class="content">
        <app-dashboard *ngFor="let taskList of myTaskList"
        [taskList]="taskList"></app-dashboard>
        <app-session-view *ngFor="let taskList of myTaskList"
        [taskList]="taskList"></app-session-view>
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