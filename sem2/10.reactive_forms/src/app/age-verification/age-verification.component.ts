import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgModel, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserInfoService} from "../user-info.service";
import {CleanCategory, ProductsService} from "../products.service";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-age-verification',
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.scss']
})
export class AgeVerificationComponent {
  public years: Array<number> = [];
  private _currentYear = new Date().getFullYear();

  public categories: Array<CleanCategory> = [];

  public form = this._fb.group({
    age: ['', [Validators.required]],
    year: ['', [Validators.required]],
    category: ['', [Validators.required]]
  });

  public get ageGetter() {
    return this.form.get('age');
  }

  constructor(
    private _router: Router,
    private _context: UserInfoService,
    private _productsService: ProductsService,
    private _fb: FormBuilder
  ) {

    this.ageGetter?.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((age) => {
        if (age && +age < 18) {
          alert('Toooo young!');
        }
      })

    this._productsService.categories$.subscribe((data) => {
      this.categories = data;
    })

    const minYear = this._currentYear - 100;
    for (let year = this._currentYear; year >= minYear; year--) {
      this.years.push(year);
    }
  }

  public verify(): void {
    const age = +this.form.value.age!;
    if (age < 18) {
      return alert('You need to be over 18 to access this site');
    }

    const year = +this.form.value.year!;
    const ageFromYear = this._currentYear - year;
    if (ageFromYear !== age) {
      return alert('Your age and year you were born do not match');
    }

    const categoryId = this.form.value.category;

    alert('Success, access granted!');
    this._context.markAgeAsVerified();
    this._router.navigate(['/shop', categoryId]);
  }

}
