import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

const Options = new HttpHeaders({
  "Access-Control-Allow-Origin": "http://localhost:4200"
});

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }
  getPostsContent(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'api/v1/posts', { headers: Options, responseType: 'json' });
  }
}
