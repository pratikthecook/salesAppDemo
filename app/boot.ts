/**
 * Created by pratik on 22/3/16.
 */
import {bootstrap}        from 'angular2/platform/browser';
import {provide , enableProdMode} from 'angular2/core';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { PathLocationStrategy, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import 'rxjs/Rx';



enableProdMode();
bootstrap(AppComponent,[ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })]);
