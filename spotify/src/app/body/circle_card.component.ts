import {Component, Input} from "@angular/core";

@Component({
    selector: 'circle_card',
    templateUrl: './circle_card.component.html',
    styleUrls: ['./circle_card.component.css']
})
export class CircleCardComponent {
    @Input()
    title! :string;
    @Input()
    image! :string;
   
}