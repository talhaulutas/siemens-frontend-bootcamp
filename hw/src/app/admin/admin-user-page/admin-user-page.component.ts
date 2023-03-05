import { Component } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';

@Component({
  selector: 'app-admin-user-page',
  templateUrl: './admin-user-page.component.html',
  styleUrls: ['./admin-user-page.component.css']
})
export class AdminUserPageComponent {
  userList:any[] = [];
  constructor(private adminService:AdminService)
  {
    this.adminService.getUsers().subscribe(x=>{
      this.userList = x;
    })
  }
  // getDetails(id:number)
  // {
  //   this.adminService.getDetailsById(id).subscribe(x=>{
  //     this.userList = x;
  //   })
  // }

}
