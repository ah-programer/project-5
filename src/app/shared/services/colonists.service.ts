import  {Injectable} from '@angular/core';
import { Colonist } from '../models';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ColonistsService {
    colonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    constructor(private http: Http){}
    getjobs(): Promise<Colonist[]> {
        return this.http.get(this.colonistsUrl)
                        .toPromise()
                        .then(response => response.json().Colonists)
                        .catch(this.handleError);
    }
private handleError(error: any): Promise<void> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

newColonist(colonist: Colonist): Promise<Colonist> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify({ colonist });
    return this.http
               .post(this.colonistsUrl, body, { headers: headers })
               .toPromise()
               .then(response => response.json().colonists)
               .catch(this.handleError);
             }

addColonist(colonist:Colonist):Promise<void>{
  let headers = new Headers({'Content-Type': 'application/json'});
        let body = JSON.stringify({ colonist });

         return this.http
              .post(this.colonistsUrl, body, { headers: headers })
              .toPromise()
              .then(response => response.json().colonist)
              .catch(this.handleError);

}
};
