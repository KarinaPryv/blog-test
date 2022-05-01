import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';
import { UserModel } from 'src/app/models/user.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts = new Array<PostModel>();
  public authorizedUser = new UserModel();
  public authorizationStatus!: boolean;
  public editedPost = new PostModel();

  constructor(public BlogService: BlogService) {
    BlogService.authorizedUser.subscribe(user => this.authorizedUser = user);
    BlogService.authorizationStatus.subscribe(status => this.authorizationStatus = status);
  }

  ngOnInit(): void {
    this.posts = this.BlogService.getAllPosts();
  }

  deletePost(index: number) {
    this.BlogService.deletePost(index);
  }

  editPost(post: PostModel) {
    this.BlogService.findPostByID(post.id);
    this.BlogService.editedPost.emit(post);
    this.BlogService.editStatus.emit(true);
  }

}
