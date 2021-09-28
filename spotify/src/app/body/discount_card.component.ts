import {Component, Input} from "@angular/core";

@Component({
    selector: 'discount_card',
    templateUrl: './discount_card.component.html',
    styleUrls: ['./discount_card.component.css']
})
export class DiscountCardComponent {
    @Input()
    title! :string;
    @Input()
    subtext! :string;
    @Input()
    image! :string;
   
}