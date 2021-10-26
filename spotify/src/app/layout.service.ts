import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DiscountCard } from "./body/discount_card.model";

@Injectable({providedIn: 'root'})
export class LayoutService {
    card1: string = "https://target-app-e3f96-default-rtdb.firebaseio.com/DiscountCards/Card1.json";
    card2: string = "https://target-app-e3f96-default-rtdb.firebaseio.com/DiscountCards/Card2.json";
    card3: string = "https://target-app-e3f96-default-rtdb.firebaseio.com/DiscountCards/Card3.json";
    card4: string = "https://target-app-e3f96-default-rtdb.firebaseio.com/DiscountCards/Card4.json";
    constructor(public http:HttpClient) {}

        getDiscountCard1() {
            console.log(this.http.get<DiscountCard>(this.card1));
            return this.http.get<DiscountCard>(this.card1);
        }

        getDiscountCard2() {
            console.log(this.http.get<DiscountCard>(this.card2));
            return this.http.get<DiscountCard>(this.card2);
        }

        getDiscountCard3() {
            console.log(this.http.get<DiscountCard>(this.card3));
            return this.http.get<DiscountCard>(this.card3);
        }

        getDiscountCard4() {
            console.log(this.http.get<DiscountCard>(this.card4));
            return this.http.get<DiscountCard>(this.card4);
        }

        EditDiscountCard1(data:DiscountCard){
            return this.http.put(this.card1, data)
        }
}