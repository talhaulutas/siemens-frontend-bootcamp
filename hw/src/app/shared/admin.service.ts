import { Comment } from './../models/comment';
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
    return this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
  getUsers()
  {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getById(id: number) {
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
}
}
