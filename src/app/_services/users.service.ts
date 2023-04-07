import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

const Options = new HttpHeaders({
  "Access-Control-Allow-Origin": "http://localhost:4200"
});

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }
  getUsersContent(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'api/v1/users', { headers: Options, responseType: 'json' });
  }
}


