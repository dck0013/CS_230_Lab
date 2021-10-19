import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DiscountCard } from "./body/discount_card.model";

@Injectable({providedIn: 'root'})
export class LayoutService {
    url: string = "https://target-app-e3f96-default-rtdb.firebaseio.com/DiscountCards.json";
    constructor(private http:HttpClient) {}

        getDiscountCards() {
            console.log(this.http.get<DiscountCard>(this.url));
            return this.http.get<DiscountCard>(this.url);
        }
}