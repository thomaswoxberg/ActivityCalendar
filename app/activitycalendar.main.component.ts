import {Component, ElementRef, Inject, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'activity-calendar',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})

export class ActivityCalendarMainComponent  {
  
}