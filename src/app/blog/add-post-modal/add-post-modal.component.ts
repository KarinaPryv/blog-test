import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-post-modal',
  templateUrl: './add-post-modal.component.html',
  styleUrls: ['./add-post-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  public post = new PostModel();
  public authorizedUser = new UserModel();
  private posts = new Array<PostModel>()
  public editStatus!:boolean;

  constructor(public BlogService: BlogService) {
    BlogService.authorizedUser.subscribe(user => this.authorizedUser = user);
    BlogService.editedPost.subscribe(post => this.post = {...post});
    BlogService.editStatus.subscribe(status => this.editStatus = status);
  }

  ngOnInit(): void {
    this.posts = this.BlogService.getAllPosts();
  }

  addNewPost() {
    let newPost = new PostModel();
    newPost.id = this.posts.length + 1;
    newPost.postedBy = this.authorizedUser.username;
    newPost.topic = this.post.topic;
    newPost.message = this.post.message;
    newPost.date = new Date();
    this.BlogService.addNewPost(newPost);
  }

  saveEditedPost() {
    let editedPost = new PostModel();
    editedPost.id = this.posts.length + 1;
    editedPost.postedBy = this.post.postedBy;
    editedPost.topic = this.post.topic;
    editedPost.message = this.post.message;
    editedPost.date = new Date();
    this.BlogService.saveEditedPost(editedPost);
  }

}
