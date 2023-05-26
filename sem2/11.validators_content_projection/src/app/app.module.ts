import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AgeVerificationComponent} from "./age-verification/age-verification.component";
import {CategorySelectorComponent} from "./shop/category-selector/category-selector.component";
import {ProductsListComponent} from "./shop/products-list/products-list.component";
import {SortPipe} from "./sort.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShopComponent } from './shop/shop.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AgeCheckGuard} from "./age-check.guard";

@NgModule({
  declarations: [
    AppComponent,
    AgeVerificationComponent,
    CategorySelectorComponent,
    ProductsListComponent,
    SortPipe,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'shop/:categoryId',
        component: ShopComponent,
        canActivate: [AgeCheckGuard]
      },
      { path: 'shop',
        component: ShopComponent,
        canActivate: [AgeCheckGuard]
      },
      { path: 'age-verification', component: AgeVerificationComponent },
      { path: "**", redirectTo: "age-verification"},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
