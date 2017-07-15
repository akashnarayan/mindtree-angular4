import { Component, OnInit,
    ElementRef, 
     ViewChild} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    //<p #para1>

    @ViewChild("para1")
    paraElement: ElementRef;

    homeLikes:number = 100;
    
    constructor() { 
       
    }

    ngOnInit() {
        //nativeElement is real DOM
         this.paraElement
        .nativeElement.textContent = "from init";


        setInterval(() => {
            this.homeLikes++;
            console.log(this.homeLikes);
        }, 5000);

     }

     likesChanged(count: number) {
         console.log("Home Parent ", count);

         this.homeLikes = count;
     }
}