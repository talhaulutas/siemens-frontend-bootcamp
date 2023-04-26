import { VisitorStateService } from './../../visitor-state.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/shared/admin.service';
import { Visitor } from 'src/app/models/visitor';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{
  postList: Post[] = [];
  userList: User[] = [];
  visitorList: Visitor[] = [];

  constructor(private postService: AdminService,public VisitorStateService:VisitorStateService) {} 
  ngOnInit(): void {
    this.postService.getPosts().subscribe((x) => {
      this.postList = x;
    });
    this.postService.getUsers().subscribe((x) => {
      this.userList = x;
    });
    this.visitorList = this.VisitorStateService.filterConfirm();
  }
}
