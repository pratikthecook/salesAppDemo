/**
 * Created by pratik on 28/3/16.
 */
import {Component}    from   'angular2/core';
import {Accordion} from "../components/accordion/accordion";
import {AccordionTab} from "../components/accordion/accordiontab";

@Component({
    selector : 'my-app',
    templateUrl : './app/accordion.html',
    directives : [Accordion,AccordionTab]
})

export class AccodrionView{

}