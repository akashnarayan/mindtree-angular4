import { Component, OnInit, 
    Input, 
    EventEmitter, 
    Output} from '@angular/core';

@Component({
    selector: 'likes',
    templateUrl: 'likes.component.html'
})

export class LikesComponent implements OnInit {
    
    @Input("count") //this allows parent to pass data
    count: number = 0;

    //child to parent
    //publish & subscribe pattern

    @Output()
    countChange: EventEmitter<number>= new EventEmitter();
    
    constructor() { }

    ngOnInit() {
        this.countChange
        .subscribe ( (n: number) => {
            console.log("n is ", n);
        })

          this.countChange
        .subscribe ( (n: number) => {
            console.log("sub2: n is ", n);
        })

     }

    increment() {
        //BAD: modifing input
        //this.count++;

        //Publish
        this.countChange.emit(this.count + 1);
    }

    decrement() {
       // this.count--;

       //Publish
        this.countChange.emit(this.count - 1);
    }
}