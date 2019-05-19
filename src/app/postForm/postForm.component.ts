import { Component, Input, Output, EventEmitter } from '@angular/core';
import { post } from 'selenium-webdriver/http';


interface Post {
    vote: boolean;
    title: string;
    body: string;
    delete: boolean;
}

@Component({
    selector: 'postForm',
    templateUrl: './postForm.component.html',
    styleUrls: ['./postForm.component.css']
})
export class postFormComponent {
    titleInput:string = '';
    bodyInput:string = '';
    titleReturn:string;
    bodyReturn:string;



    @Input() postForForm: Post; //add 'post' to the ts file
    @Output() submitted = new EventEmitter<object>();
    submitButton = (titleValue, bodyValue) => {
        // this.submitted.emit(this.postForForm)
        this.titleReturn = this.titleInput;
        this.bodyReturn = this.bodyInput;
        this.titleInput='';
        this.bodyInput='';
        this.submitted.emit({ title: this.titleReturn, body: this.bodyReturn });

    }


}

// @Input() DONKEY: Post;
// @Output() delete = new EventEmitter<Post>();

//  deleteButton =() =>{
//     this.delete.emit(this.DONKEY)
//  }


// <div>
//     <h2>{{ DONKEY.title }}</h2>
//     <span>
//         <p>{{ DONKEY.body }}</p>
//         <button (click)='deleteButton()'>x</button>
//     </span>
// </div>