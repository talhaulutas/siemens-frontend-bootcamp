import { Component } from '@angular/core';
import { filter, find, first, from, interval, map, Observable, of, range, take, takeLast, timer } from 'rxjs';
import {ajax} from 'rxjs/ajax'
import { FakeserviceService } from './fakeservice.service';

interface product
{
  id:number;
  name:string;
  price:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(private fakeService:FakeserviceService)
  {
    this.fakeService.getPostsGood().subscribe(x=>{
      console.log(x);
    })
    

    
   













    


    /*
    ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>{
        console.log(x);
      })
      fromOperatorByProduct.pipe(find(x=>x.id==2)).subscribe(x=>{
      console.log(x);
    })
    this.fakeService.getPosts().subscribe(x=>{
      x.forEach(element => {
        console.log({id:element.id,title:element.title})
      });
    })
    fromOperatorByProduct.pipe(filter(x=>x.id>=2)).subscribe(x=>{
      console.log(x);
    })
      var observable = Observable.create((observer:any)=>{
      observer.next('Hey guys!1');
      observer.next('Hey guys!2');
      observer.next('Hey guys!3');
      observer.complete();
    })
    fromOperator.pipe(first()).subscribe(x=>{
      console.log(x);
    })
    fromOperator.pipe(find(x=>x>30)).subscribe(x=>{
      console.log(x);
    })
    observable.subscribe((x:any)=>{
      console.log(x);
    })
    observable.subscribe({next:(value:any)=>console.log(value),
      error:(err: Error) => {console.log(err)},
      complete: () => {console.log("data işlemi tamamlandı.")}
      
    })
    let ofOperator = of(1,2,3,4,5);
    ofOperator.subscribe(x=>{
      console.log(x);
    })
    range(1,20).subscribe(x=>{
      console.log(x);
    })
    timer(5000).subscribe(x=>{
      console.log("0");
      alert("kampanya var");
    })
    interval(10).subscribe(x=>{
      console.log(x);
    })
    var fromOperator = from([1,2,3,4,5,6,7]);

    var fromOperatorByProduct=from([
      {id:1,name:'kalem 1',price:100},
      {id:2,name:'kalem 2',price:200},
      {id:3,name:'kalem 3',price:300}
    ])
    fromOperatorByProduct.pipe(take(2)).subscribe(x=>{
      console.log(x);
    })
    
    fromOperatorByProduct.pipe(takeLast(2)).subscribe(x=>{
      console.log(x);
    })
    fromOperator.pipe(map(x=>x*2)).subscribe(x=>{
      console.log(x);
    })*/

  }
}
