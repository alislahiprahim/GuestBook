import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-guestbooks',
  templateUrl: './guestbooks.component.html',
  styleUrls: ['./guestbooks.component.scss']
})
export class GuestbooksComponent implements OnInit {

  name: any
  email: any
  body: any
  toggle = false
  GuestbooksArr: any = [];
  @Input() reload: any
  messagesArr: any = []

  constructor(private myUsersService: UsersService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.myUsersService.getGuestbooks().subscribe((data: any) => {
      debugger
      this.GuestbooksArr = data.data
    })
  }

  ngOnChanges(reload): void {
    this.myUsersService.getGuestbooks().subscribe((data: any) => {
      debugger
      this.GuestbooksArr = data.data
    })

  }


  open(content) {
    this.modalService.open(content);
  }

  saveMessage(guestbookId) {
    const { name, email, body } = this

    this.myUsersService.addmessage({ name, email, body, guestbookId }).subscribe((data: any) => {
      if (data.message == 'success') {
        window.alert('message added')
      } else {
        window.alert('error')

      }
    })
  }
}
