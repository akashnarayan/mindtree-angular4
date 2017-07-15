import { Component, OnInit } from "@angular/core";

@Component({
    //custom html tag
    selector: 'product-app', //html5 element name

    templateUrl : "app.component.html"
    // //backquote `
    //  template: `
    //             <h2>Angular app 4
    //                 <h3>
    //  `
})
export class AppComponent implements OnInit {
    appTitle:string = "Product App";

    //View/Template is not 
    //loaded/initilaized in DOM
    constructor() {

    }

    //after view is loaded into DOM/Browser
    //View is ready
    ngOnInit() {
        
    }
}