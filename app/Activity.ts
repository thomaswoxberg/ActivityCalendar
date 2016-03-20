export class Activity {
    constructor(
        public _regardingobjectid_value: string, 
        public activityid: string, 
        public activitytype: string, 
        public scheduledend: Date, 
        public subject: string
    ) {
        
    } 
}