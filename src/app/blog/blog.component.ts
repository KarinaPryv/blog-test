import { Component, OnInit } from '@angular/core';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public authorizationStatus!: boolean;
  public authorizedUser = new UserModel();

  constructor(public BlogService: BlogService) {
    BlogService.authorizedUser.subscribe(user => this.authorizedUser = user);
    BlogService.authorizationStatus.subscribe(status => this.authorizationStatus = status);
  }

  ngOnInit(): void {
  }

  changeAuthorizationStatus() {
    this.BlogService.authorizationStatus.emit(false);
    this.BlogService.authorizedUser.emit(new UserModel());
  }

  addPost() {
    this.BlogService.editedPost.emit(new PostModel());
    this.BlogService.editStatus.emit(false);
  }

}
