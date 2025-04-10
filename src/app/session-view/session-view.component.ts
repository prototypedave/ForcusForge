import { Component } from '@angular/core';

@Component({
  selector: 'app-session-view',
  standalone: true,
  template: `
    <div class="session-view">
      <!-- LEFT PANEL -->
      <aside class="sidebar-left">
        <h2>SESSION OVERVIEW</h2>
        <h3 class="task-name">Prepare Presentation</h3>
        <p class="round">Round 2 of 4</p>

        <div class="outer-circle">
          <div class="inner-circle">
            <p class="timer">15:32</p>
          </div>
        </div>

        <div class="stepper">
          <button class="pause" type="button">⏸ Pause</button>
          <button class="next" type="button">⏭ Next</button>
        </div>

        <ul class="micro-goals">
          <li>✔ Create slides</li>
          <li>✔ Outline key points</li>
        </ul>

        <div class="distraction-log">
          <h3>Distraction Log</h3>
          <button class="add-distraction">+ Add Distraction</button>
          <p>Total Distractions: <span>0</span></p>
        </div>
      </aside>

      <!-- RIGHT PANEL -->
      <aside class="sidebar-right">
        <h2>SESSION TIMELINE</h2>
        <div class="timeline">
          <span class="timeline-block work">Work</span>
          <span class="timeline-block break">Break</span>
          <span class="timeline-block work">Work</span>
        </div>

        <h3>LIVE NOTES</h3>
        <textarea placeholder="Write your notes..."></textarea>

        <h3>MOOD TRACKER</h3>
        <div class="mood-tracker">
          <button>😊</button>
          <button>😐</button>
          <button>😩</button>
          <button>😴</button>
          <button>🔥</button>
        </div>
      </aside>
    </div>
  `,
  styleUrls: ['./session-view.component.css']
})
export class SessionViewComponent { }
