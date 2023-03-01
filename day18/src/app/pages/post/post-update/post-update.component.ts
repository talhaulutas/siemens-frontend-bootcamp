import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent {
  constructor(private activateRoute:ActivatedRoute) {}
  ngOnInit():void
  {
    var id = this.activateRoute.snapshot.queryParams['id'];
    console.log(id);
    this.activateRoute.queryParamMap.subscribe((x)=>{
      console.log('queryParamMap',x);
    });
    this.activateRoute.queryParams.subscribe((x)=>{
      console.log('queryParams',x);
    })
  }
}
