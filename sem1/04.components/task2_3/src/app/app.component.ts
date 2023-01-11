import {Component} from '@angular/core';

interface PersonAndPreference {
  name: string;
  preference: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public preferenceOptions = ['Angular', 'React', 'Vue'];
  public max: number = 4;
  public colorClass: string = 'basic';

  public name = '';
  public preference = '';

  public data: Array<PersonAndPreference> = [
    {
      name: 'Ciri',
      preference: 'Angular'
    },
    {
      name: 'Triss',
      preference: 'Vue'
    },
    {
      name: 'Yennefer',
      preference: 'React'
    },
  ];

  public add() {
      this.data.push({
        name: this.name,
        preference: this.preference
      });

      this._updateColor();

      this.name = '';
      this.preference = '';
  }


  private _updateColor() {
    if (this.data.length >= this.max) {
      this.colorClass = 'max';

    } else if (this.max - this.data.length <= 3) {
      this.colorClass = 'warning';

    } else {
      this.colorClass = 'basic'
    }
  }


  public clear() {
    this.data = [];
    this._updateColor();
  }

  public delete(index: number) {
    this.data.splice(index, 1);
    this._updateColor();
  }

}
