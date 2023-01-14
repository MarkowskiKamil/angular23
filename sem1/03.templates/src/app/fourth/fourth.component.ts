import { Component, OnInit } from '@angular/core';

interface NameAndPref {
  name: string;
  preference: string;
}

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent {
  public max = 7;
  public data: Array<NameAndPref> = [];

  public name = '';
  public preference = '';

  constructor() {
  }

  public add() {
    if (this.name && this.preference) {
      this.data.push({
        name: this.name,
        preference: this.preference
      })

      this.name = '';
      this.preference = '';
    }
  }

  public remove(idx: number) {
    this.data.splice(idx, 1);
  }

  public edit(idx: number) {
    const item = this.data[idx];
    this.name = item.name;
    this.preference = item.preference;

    this.remove(idx);

  }


}
