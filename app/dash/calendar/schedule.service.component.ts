/**
 * Created by pratik on 28/3/16.
 */
import{Injectable}   from 'angular2/core';
import { Http, HTTP_PROVIDERS,Response} from 'angular2/http';

@Injectable()
export class EventService {

    constructor(private http: Http) {}

    getEvents() {
        return this.http.get('prime/resources/data/scheduleevents.json')
            .toPromise()
            .then(res => <any[]> res.json().data)
            .then(data => { return data; });
    }
}
