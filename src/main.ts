//bootstrapping

//node_modules --> vendor bundle
import {platformBrowserDynamic} from 
        "@angular/platform-browser-dynamic";

//local app
import { AppModule } from "app/app.module";

//angular shall start app module


platformBrowserDynamic()
    .bootstrapModule(AppModule);