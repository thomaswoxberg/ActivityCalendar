import {bootstrap}    from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';
import {ActivityCalendarMainComponent} from './activitycalendar.main.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(ActivityCalendarMainComponent,
    [APP_ROUTER_PROVIDERS])
    .catch(err => console.error(err));