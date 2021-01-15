import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {State} from '../../../model/state';
import {catchError, tap} from 'rxjs/operators';

const headers = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const baseUrl = '/state';

@Injectable({
  providedIn: 'root'
})
export class StateRowListService {

  constructor(private http: HttpClient) {
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(baseUrl, headers);
  }

}
