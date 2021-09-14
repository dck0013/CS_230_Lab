import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircleCardComponent } from './body/circle_card.component';
import { DiscountCardComponent } from './body/discount_card.component';
import { SummerSaleComponent } from './body/summer_sale.component';
import { RedNavBarComponent } from './headers/red_nav_bar.component'
import { WhiteNavBarComponent } from './headers/white_nav_bar.component'
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    AppComponent,
    RedNavBarComponent,
    WhiteNavBarComponent,
    SummerSaleComponent,
    DiscountCardComponent,
    LayoutComponent,
    CircleCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
