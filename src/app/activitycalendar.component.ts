import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Activity } from './activity'
import { DynamicsService } from './dynamics.service.ts'

declare var jQuery:any;

@Component({
  selector: 'calendar',
  styleUrls: ['activitycalendar.css'], 
  templateUrl: 'activitycalendar.template.html', 
  providers: [DynamicsService]   
})
export class ActivityCalendarComponent implements OnInit
 {
   private id:string; 
   activities: Activity[]; 
   currentDate: Date; 
   
   constructor(private route: ActivatedRoute, 
               private dynamicsService: DynamicsService, 
               @Inject(ElementRef) private _elementRef: ElementRef) {
     
   }
   
   ngOnInit(): void {
      this.route.queryParams.subscribe(params => this.id = params["id"]);  
      this.getActivities();       
   }
   
   getActivities() {
     this.dynamicsService.getActivities(["appointment"])
     .subscribe(activities => {
          this.activities = activities; 
          
          var calendarActivities : Array<any> = []; 
             
             this.activities.map(a => calendarActivities.push(
                 {  
                    "id": a.activityid, 
                    "start": a.scheduledstart, 
                    "end": a.scheduledend, 
                    "title": "\n" + a.regardingName + "\n" +  a.subject, 
                    "className": ["event", a.activityid]
                })); 
                
                 var calendarDiv = jQuery(this._elementRef.nativeElement).find('#calendar'); 
            var toolTip = null; 
            
            jQuery(this._elementRef.nativeElement).find('#calendar').fullCalendar({
                height: 250,                  
                defaultDate: new Date().toISOString(),
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                dayRender: function(date, cell) {                    
                    cell.qtip({
                        content: {
                            text: "testing"
                        }, 
                        style: {
                            classes: 'qtip-boostrap'
                        }, 
                        position: {
                            at: 'top right'
                        }
                    }); 
                }, 
                eventRender: function(event, element) {
                    
                    element.qtip({
                        
                        content: {
                            text: event.title
                        }, 
                        style: {                           
                            classes: 'qtip-bootstrap' 
                        }, 
                        position: {
                            at: 'top right'
                        }
                    });
                     
                },   
                events: calendarActivities
            }); 
     }); 
   }
 }