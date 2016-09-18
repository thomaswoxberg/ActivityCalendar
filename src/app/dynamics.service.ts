import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Activity}           from './activity';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class DynamicsService {
    private dynamicsUrl = 'http://oakspringcrm:5555/oakspring/api/data/v8.0/';  // URL to dynamics
 
    constructor (private http: Http ) {   
              
    }       
    
    getActivities(types : string[]) {
        var requestUrl = this.dynamicsUrl + 'activitypointers';       
        if(types !== undefined && types.length > 0) {
        types.forEach((element, i) => {
            if(i == 0)
                requestUrl += "?$filter=activitytypecode%20eq%20%27" + element + "%27"; 
            else 
                requestUrl += "or activitytypecode%20eq%20%27" + element + "%27";                     
            });
        }         
        
         return this.http.get(requestUrl, {withCredentials: true})
        .map((res: Response) => {                               
            return <Activity[]>res.json().value })            
        .mergeMap((activities: Activity[]) => {                
            return Observable.forkJoin(
                activities.map(a =>  this.getRegarding(a))
            );        
           
        });
    }
    
    getRegarding(activity : Activity) {
        var requestUrl = this.dynamicsUrl + "accounts"; 
         return this.http.get(requestUrl + "?$filter=accountid%20eq%20" + activity._regardingobjectid_value, {withCredentials: true})
                        .map((res : Response) => {                                                      
                            activity.regardingName = res.json().value[0].name;  
                            return activity;                                            
                        }); 
    }
    
}