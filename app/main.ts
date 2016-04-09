import {bootstrap}    from 'angular2/platform/browser';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {ActivityCalendarMainComponent} from './activitycalendar.main.component';

bootstrap(ActivityCalendarMainComponent,[ROUTER_PROVIDERS]);