import { Component, Input, Output, EventEmitter } from '@angular/core';


interface Post {
    vote: boolean;
    title: string;
    body: string;
    delete: boolean;
}

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class postComponent {
    title = 'angular-social-posts-lab';

    setClasses() {
        let classes = {
            // todo: true,
            // 'is-complete': this.todo.completed
            postFormat: true
        }
        return classes;
    }

    @Input() DONKEY: Post;
    @Output() delete = new EventEmitter<Post>();

        deleteButton =() =>{
            this.delete.emit(this.DONKEY)
        }
}

//
// use event emitters to get the deleteButton() to work
//
// import { Component, Input, Output, EventEmitter } from '@angular/core';
// ...
// export class PersonComponent {
// @Input() person: Person;
// @Output() changed = new EventEmitter<boolean>();
// changeName(person: Person, newValue?: string) {
// if(newValue) {
// person.firstName = newValue;
// this.changed.emit(true);
// }
// }
// }