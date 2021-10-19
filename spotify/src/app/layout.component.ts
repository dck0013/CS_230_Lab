import { Component } from '@angular/core';
import { CircleCard } from './body/circle_card.model';
import { DiscountCard } from './body/discount_card.model';
import { DiscountCardService } from './body/discount_card.service';
import { mock_circle_cards } from './body/mock-circle_cards';
import { mock_discount_cards } from './body/mock-discount_cards';
import { LayoutService } from './layout.service';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    discountCards:DiscountCard[] = [];
    circleCards:CircleCard[] = [];
    print:DiscountCard[] = [];

    constructor(private layoutService: LayoutService) {
        this.storeDiscountCards();

        for(let i = 0; i < 4; i++) {
            this.discountCards[i] =  {image: "../assets/delightfulDecor.png",
            title: "Delightful Decor",
            subtext: "Breeze into new fave looks for Fall."};
        }
        console.log(this.discountCards);

        for(var circleCard of mock_circle_cards) {
            this.circleCards.push(new CircleCard(circleCard))
        }
    }

    DCcards: DiscountCard | undefined;

    storeDiscountCards() {
        this.layoutService.getDiscountCards().subscribe((data: DiscountCard) => {
            console.log(data);
            this.print.push(data);
        })
    }
}
