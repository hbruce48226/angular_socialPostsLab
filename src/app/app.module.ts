import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { socialPosts } from './app.component';
import { postComponent } from './post/post.component';
import { postFormComponent } from './postForm/postForm.component';

@NgModule({
  declarations: [
    socialPosts,
    postComponent,
    postFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [socialPosts]
})
export class AppModule { }
