import {Component} from "@angular/core";
import { DiscountCard } from "./body/discount_card.model";
import { DiscountCardService } from "./body/discount_card.service";
import { DatabaseService } from "./database.service";
import { LayoutService } from "./layout.service";

@Component({
    selector: 'edit-cards',
    templateUrl: './edit-cards.component.html',
    styleUrls: ['./edit-cards.component.css']
})
export class EditCardsComponent {
    constructor(private layoutService:LayoutService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onEditDiscountCard1(data:DiscountCard){
        this.layoutService.EditDiscountCard1(data).subscribe(data => {
            console.log("success");
            console.log(data);
        })
    }
}