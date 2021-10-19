import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DiscountCard } from "./discount_card.model";

@Injectable({providedIn: 'root'})
export class DiscountCardService {
    url: string = "https://target-app-e3f96-default-rtdb.firebaseio.com/DiscountCards.json";
    constructor(private http:HttpClient) {}

        getDiscountCards() {
            return this.http.get<DiscountCard>(this.url);
        }
}