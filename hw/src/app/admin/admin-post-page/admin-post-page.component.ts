import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-post-page',
  templateUrl: './admin-post-page.component.html',
  styleUrls: ['./admin-post-page.component.css']
})
export class AdminPostPageComponent {
  postList:any[] = [];
  constructor(private adminService:AdminService)
  {
    this.adminService.getPosts().subscribe(x=>{
      this.postList = x;
    });
    
  }
  getComments()
  {
    this.adminService.getCommentsByPostId(1).subscribe(x=>{
      this.postList = x;
    })
  }


}
