import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {

  public user = new UserModel();
  private users = new Array<UserModel>();
  public isIncorectData = false;
  public signInStatus = true;

  constructor(public BlogService: BlogService) { }

  ngOnInit(): void {
    this.users = this.BlogService.getAllUsers();
  }

  authorizateUser(form: NgForm) {
    let authorizateUser = new UserModel();
    authorizateUser.email = this.user.email;
    authorizateUser.password = this.user.password;
    let indexOfAuthorizatedUser = this.users.findIndex( user => user.email === authorizateUser.email && user.password === authorizateUser.password);

    if (indexOfAuthorizatedUser >= 0) {
      this.BlogService.authorizedUser.emit(this.users[indexOfAuthorizatedUser]);
      this.BlogService.authorizationStatus.emit(true);
      this.signInStatus = false;
      form.reset();
    }
    else {
      this.isIncorectData = true;
    }
  }

  chandeSignInStatus(form: NgForm) {
    this.signInStatus = true;
    this.isIncorectData = false;
    form.reset();
  }

}