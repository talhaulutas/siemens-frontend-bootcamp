import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-user-page',
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.css']
})
export class AdminUserPageComponent implements OnInit{
  userList:User[];

  constructor(private router:Router,private userService:AdminService){
    this.userList=[];
  }
  
  ngOnInit(): void {
     this.userService.getUsers().subscribe((x) => {
      this.userList = x;
    });
  }

   goToUserDetail(id: number) {
    this.router.navigate(['/admin/admin-user-detail',id]);
  }

}
