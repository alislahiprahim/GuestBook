import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  name: any
  email: any
  password: any

  constructor(private myUsersService: UsersService) { }

  ngOnInit(): void {
  }

  register() {
    const { name, email, password } = this
    
    this.myUsersService.regsiter({ name, email, password }).subscribe((data: any) => {
      localStorage.setItem('token', data.token)
      console.log(data)
    })
  }
}
