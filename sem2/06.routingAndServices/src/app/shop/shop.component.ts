import { Component } from '@angular/core';
import {Category, Product} from "../definitions";
import {categories} from "../data";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories: Array<Category> = categories;
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this.productsInCart.push(product);
  }
}
