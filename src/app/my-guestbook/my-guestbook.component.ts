import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-my-guestbook',
  templateUrl: './my-guestbook.component.html',
  styleUrls: ['./my-guestbook.component.scss']
})
export class MyGuestbookComponent implements OnInit {

  constructor(private MyuserService: UsersService, private _snackBar: MatSnackBar, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  title: any
  url: any
  udata: any
  guestbooks: any = []

  ngOnInit(): void {
    this.MyuserService.getProfile().subscribe((data: any) => {
      if (data.message == 'success')
        console.log(data.data)
      this.udata = data.data
      this.guestbooks = this.udata.guestBook
    })
  }


  deletemessage(mid) {
    this.MyuserService.deletemessage({ mid }).subscribe((data: any) => {
      if (data.message == 'success') {
        this.openSnackBar('message delete', 'done')
        this.ngOnInit()


      }
      else {
        alert('error')
      }
    })
  }


  updateGb(gbid) {
    const { title, url } = this
    this.MyuserService.updateGb({ title, url, gbid }).subscribe((data: any) => { 
      if (data.message == 'success') {
        console.log(data)
        this.openSnackBar('Guestbook updated', 'done')
        this.ngOnInit()

      }
      else {
        alert('error')
      }
    })
  }
  deleteGb(guestbookId) {
    this.MyuserService.deleteGb({ guestbookId }).subscribe((data: any) => {
      if (data.message == 'success') {
        console.log(data)
        this.openSnackBar('Guestbook delete', 'done')
        this.ngOnInit()

      }
      else {
        alert('error')
      }
    })
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }



  open(content) {
    this.modalService.open(content);
  }
}
