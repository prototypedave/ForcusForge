import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskList } from '../task-list';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-layout">
      <!-- Left Column -->
      <aside class="sidebar-left">
        <header class="motivational-header">
          <h1>Good Morning, David!</h1>
          <p>Focus on being productive instead of busy</p>
        </header>
        <section class="task-queue">
          <h2>TASK LIST</h2>
          <ul>
            <li *ngFor="let task of myTaskList">
              {{ task.title }}
            </li>
          </ul>
          <button class="primary" type="button">+ Add Task</button>
        </section>
      </aside>

      <!-- Center Column -->
      <main class="main-center">
        <section class="timer">
          <h2>FOCUS TIMER</h2>
          <div class="outer-circle">
            <div class="inner-circle">
              <div class="count-down">25:00</div>
            </div>
          </div>
          <p>Current Task</p>
          <p>Prepare presentation</p>
          <p>Round 1 of 4</p>
          <div class="stepper">
            <button class="pause-play" type="button">⏸</button>
            <button class="next" type="button">⏭</button>
          </div>
        </section>
      </main>

      <!-- Right Column -->
      <aside class="sidebar-right">
        <section class="stats">
          <h2>STATS OVERVIEW</h2>
          <p>Tasks completed today <span>3</span></p>
          <p>Focus time <span>3h</span></p>
          <p>Streak <span>3 days</span></p>
        </section>
        <section class="custom">
          <h2>CUSTOMIZATION</h2>
          <p>Dark mode <span><button class="mode">🌓</button></span></p>
          <p>Sound <span><button class="mode">🔊</button></span></p>
        </section>
      </aside>
    </div>

  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  myTaskList: TaskList[] = [];
  taskService: TasksService = inject(TasksService);

  constructor() {
    this.myTaskList = this.taskService.getAllTasks();
  }
}
