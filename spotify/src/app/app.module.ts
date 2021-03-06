import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircleCardComponent } from './body/circle_card.component';
import { DiscountCardComponent } from './body/discount_card.component';
import { SummerSaleComponent } from './body/summer_sale.component';
import { FindStoresComponent } from './find_stores_route/find_stores.component';
import { GiftCardsComponent } from './gift_cards_route/gift_cards.component';
import { RedNavBarComponent } from './headers/red_nav_bar.component';
import { WhiteNavBarComponent } from './headers/white_nav_bar.component';
import { LayoutComponent } from './layout.component';
import { RedCardComponent } from './redcard_route/redcard.component';
import { RegistryComponent } from './registry_route/registry.component';
import { AppRoutingModule } from './app-routing.module';
import { WeeklyAdComponent } from './weekly_ad_route/weekly_ad.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './headers/user-info.component';
import { EditCardsComponent } from './edit-cards.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    RedNavBarComponent,
    WhiteNavBarComponent,
    SummerSaleComponent,
    DiscountCardComponent,
    LayoutComponent,
    CircleCardComponent,
    GiftCardsComponent,
    RedCardComponent,
    RegistryComponent,
    FindStoresComponent,
    WeeklyAdComponent,
    UserInfoComponent,
    EditCardsComponent,
    AuthComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'target-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
