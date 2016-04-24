import {Component, ElementRef, Inject, OnInit } from 'angular2/core';
import {ActivityService} from './dynamics.service'
import {Activity} from './Activity'
import {CalendarActivity} from './CalendarActivity'
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';

declare var jQuery:any;

@Component({
    templateUrl: './app/activity.calendar.template.html', 
    styleUrls: ['./app/activitycalendar.component.css'],
    providers: [HTTP_PROVIDERS,ActivityService]
})
export class ActivityCalendarComponent implements OnInit 
 { 
     constructor(private _activityService: ActivityService, 
                 private _routeParams: RouteParams, 
                @Inject(ElementRef) private _elementRef: ElementRef) {}
     activities : Activity[]; 
     
     currentDate: Date; 
     
     
     ngOnInit() {    
         let id = this._routeParams.get("id"); 
         this.getActivities();  
        }
     
     getActivities() {
         this._activityService.getActivities(["appointment"])
         .subscribe(activities => {
            
            
             this.activities = activities; 
             
             var calendarActivities : Array<any> = []; 
             
             this.activities.map(a => calendarActivities.push(
                 {  
                    "start": a.scheduledstart, 
                    "end": a.scheduledend, 
                    "title": "\n" + a.regardingName + "\n" +  a.subject, 
                    "className": "event"
                })); 
          
                jQuery(this._elementRef.nativeElement).find('#calendar').fullCalendar({
                    defaultDate: new Date().toISOString(),
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    eventMouseOver: function(event, jsEvent, view) {
                        var t = 0; 
                    }, 
                    events: calendarActivities
            }); 
           
        });      
    }
 }