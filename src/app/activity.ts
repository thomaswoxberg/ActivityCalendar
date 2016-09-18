export class Activity {
    constructor(
        public _regardingobjectid_value: string, 
        public regardingName: string, 
        public activityid: string, 
        public activitytype: string, 
        public scheduledend: Date, 
        public scheduledstart: Date, 
        public subject: string
    ) {
        
    } 
}