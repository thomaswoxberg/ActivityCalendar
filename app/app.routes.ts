import { provideRouter, RouterConfig } from '@angular/router';
import {ActivityCalendarComponent} from './activitycalendar.component';

export const routes: RouterConfig = [
  { path: '', component: ActivityCalendarComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];