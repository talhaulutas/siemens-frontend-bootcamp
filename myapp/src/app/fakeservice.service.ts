import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, find, first, forkJoin, from, map, Observable, observable, of, switchMap, throwError } from 'rxjs';
import { Albums } from './models/albums';
import { Post } from './models/post';
import { Postshort } from './models/postshort';
import { Postupdate } from './models/postupdate';
import { Todos } from './models/todos';

@Injectable({
  providedIn: 'root'
})
export class FakeserviceService {

  constructor(private httpClient: HttpClient) { }
  getPostsWithUserId(id:number){
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(switchMap(x=> from(x)), find(x=>x.id==id),switchMap(x=>this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${x.id}`)));
  }
  getAlbumsWithUserId(id:number){
    return this.httpClient.get<Todos[]>('https://jsonplaceholder.typicode.com/todos').pipe(switchMap(x=> from(x)),
    find(x=>x.userId == id),switchMap(x=>this.httpClient.get<Albums[]>(`https://jsonplaceholder.typicode.com/albums?userId=${x?.userId}`)))
  }
  getParallelWithForkJoinOperator()
  {
    return forkJoin({
      post:this.httpClient.get('https://jsonplaceholder.typicode.com/posts'),
      users:this.httpClient.get('https://jsonplaceholder.typicode.com/users')
    })
  }
  getParallelRequest()
  {
    var post = this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    var users = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    return {postObservable:post,userObservable:users};
  }

  getPosts() {
    let userID = 1;
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts?userID=${userID}").
      pipe(switchMap(x => from(x)), map(x => `${x.id} - ${x.title}`));
  }
  getPostsGood() {
    let userID = 1;
    const params = new HttpParams().set('userID', '1').set('id', '10');
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, { params }).
      pipe(switchMap(x => from(x)), map(x => `${x.id} - ${x.title}`));
  }
  getPostsWithHeader() {
    var myheaders = new HttpHeaders().set("authorization", "my token");
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, { headers: myheaders });
  }
  savePost(newPost:Post){
    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts',newPost);
  }
  savePostWithError(newPost:Post){
    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/pos',newPost).pipe(catchError(err=>
    {
      //console.log(err);
      return throwError(() => new Error('Bir hata meydana geldi'));
    }),finalize(()=>console.log("Final methodu çalıştı.")));
  }
  updatePut(updatePost:Postupdate){
    return this.httpClient.put<any>(`https://jsonplaceholder.typicode.com/posts/${updatePost.id}`,updatePost);
  }
  deletePost(id:number)
  {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
