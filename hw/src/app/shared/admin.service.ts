import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Post } from '../models/post';
import { find, from, map, switchMap } from 'rxjs';
import { User } from '../models/user';

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
    /*return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').pipe(switchMap(x=>from(x)),
    find(x=>x.id == id),switchMap(x=>this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${x?.userId}`)))*/
    return this.httpClient.get<any> (`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
  getUsers()
  {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
  getDetailsById(id:number) {
    const number = id;
    const params = new HttpParams().set('id','number');
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/users`, { params }).
      pipe(switchMap(x => from(x)), map(x => `${x.id}`));
  }
  getById(id: number) {
    return this.httpClient.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
}
}
