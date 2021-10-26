import {Component} from "@angular/core";
import { DiscountCard } from "./body/discount_card.model";
import { DiscountCardService } from "./body/discount_card.service";
import { LayoutService } from "./layout.service";

@Component({
    selector: 'edit-cards',
    templateUrl: './edit-cards.component.html',
    styleUrls: ['./edit-cards.component.css']
})
export class EditCardsComponent {
    constructor(private layoutService:LayoutService) {
    }

    onEditDiscountCard1(data:DiscountCard){
        console.log("hi");
        console.log(data);

        this.layoutService.EditDiscountCard1(data).subscribe(data => {
            console.log("success");
            console.log(data);
        })
    }

}