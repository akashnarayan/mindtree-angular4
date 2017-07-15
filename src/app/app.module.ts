import {NgModule} from "@angular/core";

//support for browser
import {BrowserModule} 
    from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import { HomeComponent } from "app/components/home.component";
import { AboutComponent } from "app/components/about.component";
import { LikesComponent } from "app/components/likes.component";

//main module

@NgModule({
    //prior module dependencies
    //3rd party, angular modules, app modules
    imports: [
        BrowserModule,

       // ProductModule
    ],


    //all compoenents, pipe, directives 
    //in declaration
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        LikesComponent
        //..
    ],

    bootstrap: [
        AppComponent,
        //ChatAppComponent
    ]
})
export class AppModule {

}
