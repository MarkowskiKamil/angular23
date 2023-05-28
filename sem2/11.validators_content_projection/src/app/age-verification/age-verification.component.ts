import {Component} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, NgModel, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserInfoService} from "../user-info.service";
import {CleanCategory, ProductsService} from "../products.service";
import {debounceTime, map} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
  }, {
    // validators: [
    //   (fg: FormGroup) => {
    //     const year = fg.value.year;
    //     const age = fg.value.age;
    //
    //     if (!age || !year) {
    //       return null;
    //     }
    //
    //     const ageFromYear = this._currentYear - year;
    //     if (ageFromYear !== age) {
    //       return {
    //         ageYearNoMatch: true
    //       }
    //     }
    //
    //     return null;
    //   }
    // ],
    asyncValidators: [
      (fg: FormGroup) => {
        const year = fg.value.year;
        const age = fg.value.age;

        return this._http.get('https://chrum.it/verify-age.php', {
          params: {
            age, year
          }
        }).pipe(
          map((isOkay) => {
            if (isOkay) {
              return null;
            }

            return {
              ageYearNoMatch: true
            }
          })
        )

      }
    ]
  });

  public get ageGetter() {
    return this.form.get('age');
  }

  constructor(
    private _router: Router,
    private _context: UserInfoService,
    private _productsService: ProductsService,
    private _fb: FormBuilder,
    private _http: HttpClient
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


    const categoryId = this.form.value.category;

    alert('Success, access granted!');
    this._context.markAgeAsVerified();
    this._router.navigate(['/shop', categoryId]);
  }

}
