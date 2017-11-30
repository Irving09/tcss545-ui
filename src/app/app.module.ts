import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfferingsService } from './offerings.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LocationComponent } from './location/location.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { OfferingComponent } from './offering/offering.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LocationComponent,
    IngredientComponent,
    OfferingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [OfferingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }