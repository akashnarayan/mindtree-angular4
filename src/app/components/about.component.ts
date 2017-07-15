import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
    
    members:string [] = ['Member 1', 'Member 2'];

    show:boolean = true;

    address: any = { city: 'Bangalore'};

    aboutLikes : number = 1000;
    
    constructor() { }

    ngOnInit() {
        
     }

    showHide(e: Event) {
        console.log("event ", e);

        //stop bubbling event to parent
        e.stopPropagation();

        this.show = !this.show;
    }

    parentClient() {
        console.log("Parent Client");
    }
}