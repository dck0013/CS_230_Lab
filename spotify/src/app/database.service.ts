import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { DiscountCard } from "./body/discount_card.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    items: Observable<DiscountCard []>

    constructor(private db:AngularFireDatabase) {
            console.log("database service");
            this.items = this.db.list<DiscountCard>('DiscountCards').valueChanges();
    }

public showData(){
    this.items.subscribe((data: DiscountCard []) => {
        console.log("Data recieved");
        for (let item of data) {
            console.log(item);
        }
    })
}
}