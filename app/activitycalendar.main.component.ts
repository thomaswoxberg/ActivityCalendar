import {Component, ElementRef, Inject, OnInit } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'; 
import {ActivityCalendarComponent} from './activitycalendar.component'; 

declare var jQuery:any;

@Component({
    selector: 'activity-calendar',
    template: '<router-outlet></router-outlet>', 
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', name: 'ActivityCalendar', component: ActivityCalendarComponent, useAsDefault: true}
])
export class ActivityCalendarMainComponent
{ 
    
}