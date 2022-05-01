import { EventEmitter, Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private users: Array<UserModel> = [
    {
      id: 1,
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin'
    }
  ];

  private posts: Array<PostModel> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'First post',
      date: new Date(2021, 11, 31, 20, 5),
      message: 'Writers of blogs are like baking bread in bread makers. The quality of a blog is not dependent on how long youre writing the blog. The answer is to start with getting idea and outline your own blog posts before writing it.'
    }
  ];

  public authorizedUser = new EventEmitter<UserModel>();
  public authorizationStatus = new EventEmitter<boolean>();
  public editedPost = new EventEmitter<PostModel>();
  private indexOfEditedPost!: number;
  public editStatus = new EventEmitter<boolean>();

  constructor() { }

  // Methods for users:

  getAllUsers() {
    return this.users;
  }

  addNewUser(newUser: UserModel) {
    this.users.push(newUser);
  }

  // Methods for posts:

  getAllPosts() {
    return this.posts;
  }

  addNewPost(newPost: PostModel) {
    this.posts.push(newPost);
  }

  deletePost(postIndex: number) {
    this.posts.splice(postIndex, 1);
  }

  findPostByID(postID:number) {
    this.indexOfEditedPost = this.posts.findIndex(post => post.id === postID);
  }

  saveEditedPost(editedPost: PostModel) {
    this.posts.splice(this.indexOfEditedPost, 1, editedPost);
  }
}
