import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fullName: string | null = null;
  constructor() {
  }

  public onFullnameChanged(fullname: string) {
    this.fullName = fullname;
  }

  public welcome() {
    alert('Welcome ' + this.fullName);
  }

  public byebye() {
    alert('Bye ' + this.fullName);
  }
}
