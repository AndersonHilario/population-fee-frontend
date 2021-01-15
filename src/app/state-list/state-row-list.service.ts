import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {State} from '../../model/state';
import {City} from '../../model/city';

const headers = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const stateUrl = '/state';
const cityUrl = '/city';

@Injectable({
  providedIn: 'root'
})
export class StateRowListService {

  constructor(private http: HttpClient) {
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(stateUrl, headers);
  }

  deleteCity(id: string): Observable<City> {
    const url = `${cityUrl}/${id}`;
    return this.http.get<City>(url, headers);
  }

}
