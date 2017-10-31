import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'rxjs/add/operator/take';//to use take(1) 

platformBrowserDynamic().bootstrapModule(AppModule);
