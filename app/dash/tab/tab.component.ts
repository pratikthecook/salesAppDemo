/**
 * Created by pratik on 28/3/16.
 */
import {Component , ViewEncapsulation , OnInit} from 'angular2/core';

@Component({
    //template : '<h3>Tab View Component</h3>'
    templateUrl : './app/dash/tab/tabpage.html'
})

export class TabView implements OnInit{
    constructor(){
        console.log('Tab Component');
    }

    ngOnInit(){
        componentHandler.upgradeAllRegistered();
    }
}
