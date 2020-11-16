export class Events {
    EventName:string
    description:string
    Location:string
    date:Date
    time:string

    constructor(EventName:string,description:string,Location:string,date = new Date(),time:string){
        this.EventName=EventName
        this.description=description
        this.Location=Location
        this.date=date
        this.time=time
    }
}
