import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { FakeService } from 'src/app/fake.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-parent-post',
  templateUrl: './parent-post.component.html',
  styleUrls: ['./parent-post.component.css']
})
export class ParentPostComponent {
  postList:ReadonlyArray<Post>=[];
  constructor(private fakeService:FakeService)
  {
    this.fakeService.getPosts().subscribe(x=>this.postList=x);
    //this.fakeService.getPostsByUserId().subscribe(x=>this.postList=x);
  }
  search(id:number)
  {
    this.fakeService.getPostsByUserId(id).subscribe(x=>this.postList=x);
  }
  close()
  {
    this.fakeService.getPosts().subscribe(x=>this.postList=x);
  }
  titleSearch(text:string)
  {
    this.fakeService.getPosts().pipe(filter(x=>x.includes(x=>x.title)))
  }

}
