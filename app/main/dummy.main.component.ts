/**
 * Created by pratik on 28/3/16.
 */
import {Component , ViewEncapsulation , OnInit} from 'angular2/core';

@Component({
    //template : '<p>Child Routed Component</p>'
    templateUrl : './app/main/dummypage.html'
})


export class Main{
    constructor(){
        console.log('Child of Dummy Component');
    }
}
