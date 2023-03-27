import {Component} from '@angular/core';
import {Category, Product} from "../definitions";
import {Router} from "@angular/router";
import {UserInfoService} from "../user-info.service";
import {ProductsService} from "../products.service";
import {delay} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories$ = this._productsService.categoriesWithProducts$
    .pipe(
      delay(3000)
    );
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  constructor(
    private _router: Router,
    private _userInfoService: UserInfoService,
    private _productsService: ProductsService
  )
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
