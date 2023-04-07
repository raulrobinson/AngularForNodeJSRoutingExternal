import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const Options = new HttpHeaders({
  "Access-Control-Allow-Origin": "http://localhost:4200"
});

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }
  getCommentContent(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.baseUrl + 'api/v1/comments', { headers: Options, responseType: 'json' });
  }
}
