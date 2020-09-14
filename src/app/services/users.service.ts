import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  backendUrl = 'http://localhost:8085/users/'

  constructor(private myhttpClient: HttpClient) { }

  regsiter(data) {
    return this.myhttpClient.post(this.backendUrl + 'register', data)
  }

  login(data) {
    return this.myhttpClient.post(this.backendUrl + 'login', data)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logOut() {
    return localStorage.removeItem('token')
  }

  createGuestbook(data) {
    return this.myhttpClient.post(this.backendUrl + 'createguestbook', data)

  }

  getGuestbooks() {
    return this.myhttpClient.get(this.backendUrl + 'getallGuestbooks')
  }

  addmessage(data) {
    return this.myhttpClient.post(this.backendUrl + 'addmessage', data)
  }

  getProfile() {
    return this.myhttpClient.get(this.backendUrl + 'myprofile')
  }

  deletemessage(mid) {
    return this.myhttpClient.post(this.backendUrl + 'deletemessage', mid)
  }

  deleteGb(data) {
    return this.myhttpClient.post(this.backendUrl + 'deleteguestbook', data)
  }
  updateGb(data){
    return this.myhttpClient.post(this.backendUrl + 'updateGb', data)
  }
}
