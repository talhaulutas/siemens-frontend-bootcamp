import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { Comment } from 'src/app/models/comment';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-post-detail',
  templateUrl: './admin-post-detail.component.html',
  styleUrls: ['./admin-post-detail.component.css']
})
export class AdminPostDetailComponent implements OnInit {
  commentList: Comment [] = [];
constructor( private activatedRoute: ActivatedRoute,
  private postService: AdminService){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: any) => {
      this.postService.getCommentsByPostId(param.id).subscribe((x) => {
        this.commentList = x;
      });
    });
  }
}
