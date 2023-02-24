import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private httpClient:HttpClient) { }
  getPosts()
  {
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
  getPostsByUserId(id:number)
  {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
