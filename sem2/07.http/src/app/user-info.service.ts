import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private _isAgeVerified = false;

  constructor() {
  }

  public markAgeAsVerified() {
    this._isAgeVerified = true;
  }

  public isUserOfAge() {
    return this._isAgeVerified === true;
  }
}
