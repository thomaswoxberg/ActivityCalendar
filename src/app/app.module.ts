import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; 
import {HttpModule} from '@angular/http'
import { routing } from './app.routing'; 
import { AppComponent }   from './app.component';
import { ActivityCalendarComponent }   from './activitycalendar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule ], 
  declarations: [ AppComponent, ActivityCalendarComponent ], 
  bootstrap: [AppComponent]
})
export class AppModule { }