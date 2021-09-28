import { Component } from '@angular/core';
import { DiscountCard } from './body/discount_card.model';
import { mock_discount_cards } from './body/mock-discount_cards';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    discountCards:DiscountCard[] = [];

    constructor() {
        for(var discountCard of mock_discount_cards) {
            this.discountCards.push(new DiscountCard(discountCard))
        }
    }

    
}
