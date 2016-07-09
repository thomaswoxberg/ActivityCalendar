import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Activity}           from './activity';
import {Observable}     from 'rxjs/Observable';
import {Location} from '@angular/router'; 

@Injectable()
export class ActivityService {
 
    constructor (private http: Http ) {
        var test = document.location.host; 
    }
    private _dynamicsUrl = 'http://oakspringcrm:5555/oakspring/api/data/v8.0/';  // URL to dynamics
 
    getActivities(types : string[]) {
        
        var requestUrl = this._dynamicsUrl + 'activitypointers';       
        
        let _build = this.http._backend._browserXHR.build
        this.http._backend._browserXHR.build = () => {
            let _xhr =  _build();
            _xhr.withCredentials = true;
            return _xhr;
        };
        
        if(types !== undefined && types.length > 0) {
            types.forEach((element, i) => {
                if(i == 0)
                    requestUrl += "?$filter=activitytypecode%20eq%20%27" + element + "%27"; 
                else 
                    requestUrl += "or activitytypecode%20eq%20%27" + element + "%27"; 
                    
            });
            
        }
        
        return this.http.get(requestUrl)
        .map((res: Response) => {                               
            return <Activity[]>res.json().value })            
        .flatMap((activities: Activity[]) => {                
            return Observable.forkJoin(
                activities.map(a =>  this.getRegarding(a))
            );        
           
        });          
    }
    
    getRegarding(activity : Activity) {
        var requestUrl = this._dynamicsUrl + "accounts"; 
         return this.http.get(requestUrl + "?$filter=accountid%20eq%20" + activity._regardingobjectid_value)
                        .map((res : Response) => {                                                      
                            activity.regardingName = res.json().value[0].name;  
                            return activity;                                            
                        }); 
    }
  
}