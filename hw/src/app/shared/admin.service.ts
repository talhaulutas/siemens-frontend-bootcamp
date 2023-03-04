import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from '../models/post';
import { find, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  getPosts()
  {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getCommentsByPostId(id:number)
  {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(switchMap(x=>from(x)),
    find(x=>x.id == id),switchMap(x=>this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${x?.userId}`)))
  }
}
