import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = '';
  public familyName: string = '';

  public editing = true;

  public fullName: string | null = null;

  constructor() {
  }

  public submit() {
    this.editing = false;
    this.fullName = this.name + ' ' + this.familyName;
  }

  public edit() {
    this.editing = true;
  }

  public welcome() {
    alert('Welcome ' + this.fullName);
  }

  public byebye() {
    alert('Bye ' + this.fullName);
  }
}
