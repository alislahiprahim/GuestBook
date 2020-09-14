import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../services/users.service';
UsersService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string
  url: any
  GuestbooksArr: any = [];
  reload: any
  constructor(private myUsersService: UsersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }


  create() {
    const { title, url } = this
    if (title && url) {
      this.myUsersService.createGuestbook({ title, url }).subscribe((data: any) => {
        if (data) {
          this.openSnackBar(this.title, 'done')
          this.reload = data
        }
      })
    } else {
      alert('fill form')
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}
