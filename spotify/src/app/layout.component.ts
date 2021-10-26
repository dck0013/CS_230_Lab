import { Component } from '@angular/core';
import { CircleCard } from './body/circle_card.model';
import { DiscountCard } from './body/discount_card.model';
import { DiscountCardService } from './body/discount_card.service';
import { mock_circle_cards } from './body/mock-circle_cards';
import { mock_discount_cards } from './body/mock-discount_cards';
import { EditCardsComponent } from './edit-cards.component';
import { LayoutService } from './layout.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    discountCards:DiscountCard[] = [];
    circleCards:CircleCard[] = [];
    print:Object = [];

    constructor(private layoutService: LayoutService) {

        this.storeDiscountCards();

        for(var circleCard of mock_circle_cards) {
            this.circleCards.push(new CircleCard(circleCard))
        }
    }

    DCcards: DiscountCard | undefined;

    storeDiscountCards() {
        this.layoutService.getDiscountCard1().subscribe((data: DiscountCard) => {
            this.discountCards[0] = data; 
        })
        this.layoutService.getDiscountCard2().subscribe((data: DiscountCard) => {
            this.discountCards[1] = data; 
        })
        this.layoutService.getDiscountCard3().subscribe((data: DiscountCard) => {
            this.discountCards[2] = data; 
        })
        this.layoutService.getDiscountCard4().subscribe((data: DiscountCard) => {
            this.discountCards[3] = data; 
        })
        console.log(this.discountCards);
    }
}
