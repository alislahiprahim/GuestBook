import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: any
  password: any

  constructor(private myUsersService: UsersService, private myRouter: Router) { }

  ngOnInit(): void {
  }



  login() {
    const { email, password } = this

    this.myUsersService.login({ email, password }).subscribe((data: any) => {
      debugger
      if (data.message == 'success'){
        localStorage.setItem('token', data.token)
        this.myRouter.navigate(['/'])
      }else{
        window.alert('login error')
      }
    })
  }

}
