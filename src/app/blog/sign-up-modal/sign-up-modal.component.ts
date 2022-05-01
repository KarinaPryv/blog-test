import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class AuthorizationModalComponent implements OnInit {

  public user = new UserModel();
  private users = new Array<UserModel>();
  public isIncorrectUsername = false;
  public isIncorrecrEmail = false;

  constructor(public BlogService: BlogService) { }

  ngOnInit(): void {
    this.users = this.BlogService.getAllUsers();
  }

  addNewUser(form: NgForm) {
    let newUser: UserModel = {
      id: this.users.length + 1,
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    }

    this.BlogService.addNewUser(newUser);
    form.reset();
  }

  checkAuthenticUsername() {
    let username = this.user.username;
    let isAuthenticUsername = this.users.some(function (user) {
      return user.username === username;
    });
    if (isAuthenticUsername) {
      this.isIncorrectUsername = true;
    }
    else {
      this.isIncorrectUsername = false;
    }
  }

  checkAuthenticEmail() {
    let email = this.user.email;
    let isAuthenticEmail = this.users.some(function (user) {
      return user.email === email;
    });
    if (isAuthenticEmail) {
      this.isIncorrecrEmail = true;
    }
    else {
      this.isIncorrecrEmail = false;
    }
  }
  
}
