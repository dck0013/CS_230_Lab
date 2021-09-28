import { Component } from '@angular/core';
import { CircleCard } from './body/circle_card.model';
import { DiscountCard } from './body/discount_card.model';
import { mock_circle_cards } from './body/mock-circle_cards';
import { mock_discount_cards } from './body/mock-discount_cards';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    discountCards:DiscountCard[] = [];
    circleCards:CircleCard[] = [];

    constructor() {
        for(var discountCard of mock_discount_cards) {
            this.discountCards.push(new DiscountCard(discountCard))
        }

        for(var circleCard of mock_circle_cards) {
            this.circleCards.push(new CircleCard(circleCard))
        }
    }
}
