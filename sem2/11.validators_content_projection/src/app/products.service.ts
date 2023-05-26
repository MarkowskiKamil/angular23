import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./definitions";
import {forkJoin, map, share} from "rxjs";

export interface CleanCategory {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public categories$ = this._http.get<Array<CleanCategory>>('https://edu.chrum.it/data/categories.json')
    .pipe(
      share()
    );
  public products$ = this._http.get<Array<Product>>('https://edu.chrum.it/data/clean_products.json');

  public categoriesWithProducts$ = forkJoin([
    this.categories$,
    this.products$
  ]).pipe(
    map((data: [Array<CleanCategory>, Array<Product>]) => {
      const [categories, products] = data;
      return this._mergeProductsIntoCategories(categories, products);
    })
  );

  constructor(private _http: HttpClient) { }


  private _mergeProductsIntoCategories(categories: Array<CleanCategory>, products: Array<Product>) {
    return categories.map((category) => {
      const categoryId = category.id;
      const categoryProducts = products
        .filter((product) => product.category === categoryId);

      return {
        ...category,
        products: categoryProducts
      }

    })
  }


}
