import { Component, OnDestroy } from '@angular/core';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  constructor(private userState:UserStateService){}
  ngOnDestroy(): void {
    console.log("home destroy");
  }
  login()
  {
    this.userState.currentUser = {id:1,name:"ahmet",email:"ahmet@outlook.com"}
  }
  change()
  {
    this.userState.currentUser!.email = "mehmet@outlook.com"
  }
}
