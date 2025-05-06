import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionViewComponent } from './session-view/session-view.component';
import { BreakViewComponent } from '../break-view/break-view.component';
import { StatsComponent } from '../stats/stats.component';
import { SettingsComponent } from '../settings/settings.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Forcus Forge'
    },
    {
        path: 'session/:id',
        component: SessionViewComponent,
        title: 'Forcus Forge - Sessions'
    },
    {
        path: 'break-view',
        component: BreakViewComponent,
        title: 'Break view'
    },
    {
        path: 'stats',
        component: StatsComponent,
        title: 'Stats'
    },
    {
        path: 'settings',
        component: SettingsComponent,
        title: 'settings'
    }
];
