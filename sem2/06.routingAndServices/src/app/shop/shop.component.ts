import {Component} from '@angular/core';
import {Category, Product} from "../definitions";
import {categories} from "../data";
import {Router} from "@angular/router";
import {UserInfoService} from "../user-info.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories: Array<Category> = categories;
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  constructor(
    private _router: Router,
    private _userInfoService: UserInfoService)
  {
    this.isAgeVerifiedCheck();
  }

  public isAgeVerifiedCheck() {
    if (this._userInfoService.isUserOfAge() === false) {
      this._router.navigate(['/age-verification'])
    }
  }

  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this.productsInCart.push(product);
  }
}
