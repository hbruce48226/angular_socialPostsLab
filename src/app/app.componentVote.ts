import { Component } from '@angular/core';

interface Post {
  title: string;
  body: string;
  delete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class socialPosts {
  title = 'angular-social-posts-lab';

  showPostFormPopup:boolean = false;

  //set dynamic classes
  setClasses() {
    let classes = {
      // todo: true,
      // 'is-complete': this.todo.completed
      postList: true
    }
    return classes;
  }

  listOfPosts = [
    {title: 'dog', body: 'i am cute and fluffy', delete: true},
    {title: 'cat', body: 'i am evil and awful', delete: true},
    {title: 'solitude', body: 'on solitude, my thoughts are...', delete: true}
];

onDelete = (event) => {
  const index = this.listOfPosts.indexOf(event);
  this.listOfPosts.splice(index,1);
}

onSubmit = (event) => {
  this.listOfPosts.unshift(event);
  this.showPostFormPopup = !this.showPostFormPopup;
}

newThought = () => {
  this.showPostFormPopup = !this.showPostFormPopup;
}

  // removeTask = (i) => {
  //   this.thoughtLog.splice(i, 1);
  // };

}
