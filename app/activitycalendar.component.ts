import {Component, ElementRef, Inject, OnInit } from '@angular/core';
import {ActivityService} from './dynamics.service'
import {Activity} from './Activity'
import {CalendarActivity} from './CalendarActivity'
import {HTTP_PROVIDERS} from '@angular/http';
import {OnActivate, RouteSegment, RouteTree} from '@angular/router';

declare var jQuery: any;

@Component({
    templateUrl: './app/activity.calendar.template.html',
    styleUrls: ['./app/activitycalendar.component.css'],
    providers: [HTTP_PROVIDERS, ActivityService]
})
export class ActivityCalendarComponent implements OnInit, OnActivate {
    constructor(private _activityService: ActivityService,
        @Inject(ElementRef) private _elementRef: ElementRef) { }

    routerOnActivate(curr: RouteSegment, prev?: RouteSegment,
        currTree?: RouteTree, prevTree?: RouteTree): void {
        let id = curr.getParam('id');
    }
    activities: Activity[];

    currentDate: Date;


    ngOnInit() {
        this.getActivities();
    }

    getActivities() {
        this._activityService.getActivities(["appointment"])
            .subscribe(activities => {
                this.activities = activities;

                var calendarActivities: Array<any> = [];

                this.activities.map(a => calendarActivities.push(
                    {
                        "id": a.activityid,
                        "start": a.scheduledstart,
                        "end": a.scheduledend,
                        "title": "\n" + a.regardingName + "\n" + a.subject,
                        "className": ["event", a.activityid]
                    }));

                var calendarDiv = jQuery(this._elementRef.nativeElement).find('#calendar');
                var toolTip = null;

                jQuery(this._elementRef.nativeElement).find('#calendar').fullCalendar({
                    defaultDate: new Date().toISOString(),
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    eventRender: function (event, element) {

                        toolTip = element.qtip({

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