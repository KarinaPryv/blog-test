import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AddModalComponent } from './blog/add-post-modal/add-post-modal.component';
import { AuthorizationModalComponent } from './blog/sign-up-modal/sign-up-modal.component';
import { PostsListComponent } from './blog/posts-list/posts-list.component';
import { SignInModalComponent } from './blog/sign-in-modal/sign-in-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AddModalComponent,
    AuthorizationModalComponent,
    PostsListComponent,
    SignInModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
