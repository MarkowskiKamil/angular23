import {Component} from '@angular/core';
import {Category, Product} from "../definitions";
import {ActivatedRoute, Router} from "@angular/router";
import {UserInfoService} from "../user-info.service";
import {ProductsService} from "../products.service";
import {delay, map} from "rxjs";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories$ = this._productsService.categoriesWithProducts$
    .pipe(
      delay(1000)
    );
  public productsToDisplay: Array<Product> = [];

  public cartItemsCount$ = this._cart.items$
    .pipe(map((items) => items.length));

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userInfoService: UserInfoService,
    private _productsService: ProductsService,
    private _cart: CartService
  )
  {
    const categoryId = this._route.snapshot.params['categoryId'];

    this.allCategories$.subscribe((data) => {
      const selectedCategory = data.find((category) => +category.id === +categoryId);
      if (selectedCategory) {
        this.onCategorySelected(selectedCategory);
      }
    })

    console.log(categoryId);
  }

  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this._cart.add(product);
  }
}
