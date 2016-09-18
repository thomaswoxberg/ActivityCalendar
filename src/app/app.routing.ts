import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityCalendarComponent }      from './activitycalendar.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ActivityCalendarComponent   
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);