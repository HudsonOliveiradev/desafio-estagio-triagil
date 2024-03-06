import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private baseURL = 'http://localhost:3000/api/teams';

  constructor(private http: HttpClient) { }

  getTimes(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }
  getTimeByUser(user: String): Observable<any>{
    return this.http.get(`${this.baseURL}/${user}`);
  }
  criarTime(data: any): Observable<any>{
    return this.http.post(`${this.baseURL}`, data);
  }
}
