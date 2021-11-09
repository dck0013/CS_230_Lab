import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FindStoresComponent } from './find_stores_route/find_stores.component';
import { GiftCardsComponent } from './gift_cards_route/gift_cards.component';
import { LayoutComponent } from './layout.component';
import { RedCardComponent } from './redcard_route/redcard.component';
import { RegistryComponent } from './registry_route/registry.component';
import { WeeklyAdComponent } from './weekly_ad_route/weekly_ad.component';

const routes: Routes = [
  { path: 'registry', component: RegistryComponent },
  { path: 'redcard', component: RedCardComponent },
  { path: 'giftCards', component: GiftCardsComponent },
  { path: 'findStores', component: FindStoresComponent },
  { path: 'home', component: LayoutComponent },
  { path: 'weeklyAd', component: WeeklyAdComponent },
  { path: 'auth' , component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
