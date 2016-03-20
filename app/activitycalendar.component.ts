import {Component, ElementRef, Inject, OnInit } from 'angular2/core';
import {ActivityService} from './dynamics.service'
import {Activity} from './Activity'
import {CalendarActivity} from './CalendarActivity'
import {HTTP_PROVIDERS} from 'angular2/http';

declare var jQuery:any;

@Component({
    selector: 'activity-calendar',
    templateUrl: './app/activity.calendar.template.html', 
    providers: [HTTP_PROVIDERS,ActivityService]
})
export class ActivityCalendarComponent implements OnInit 
 { 
     constructor(private _activityService: ActivityService, @Inject(ElementRef) private _elementRef: ElementRef) {}
     activities : Activity[]; 
     
     currentDate: Date; 
     
     
     ngOnInit() {          
         this.getActivities();  
        }
     
     getActivities() {
         this._activityService.getActivities(["appointment"])
         .subscribe(activities => {
             this.activities = activities; 
             var calendarActivities : Array<any> = []; 
             
             this.activities.map(a => calendarActivities.push({"start": a.scheduledend, "title": a.subject})); 
          
                jQuery(this._elementRef.nativeElement).find('#calendar').fullCalendar({
                    defaultDate: new Date().toISOString(),
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    events: calendarActivities
            }); 
           
        });      
    }
 }