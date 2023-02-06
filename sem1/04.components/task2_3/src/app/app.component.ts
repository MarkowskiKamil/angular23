import {Component} from '@angular/core';

export interface PersonAndPreference {
  name: string;
  preference: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public preferenceOptions = ['Angular', 'React', 'Vue', 'Svelte'];
  public max: number = 4;
  public colorClass: string = 'basic';

  public peopleInTheRoom: Array<PersonAndPreference> = [
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

  public add(data: PersonAndPreference) {
      this.peopleInTheRoom.push({
        name: data.name,
        preference: data.preference
      });

      this.peopleInTheRoom = [...this.peopleInTheRoom];

      this._updateColor();
  }


  private _updateColor() {
    if (this.peopleInTheRoom.length >= this.max) {
      this.colorClass = 'max';

    } else if (this.max - this.peopleInTheRoom.length <= 3) {
      this.colorClass = 'warning';

    } else {
      this.colorClass = 'basic'
    }
  }


  public clear() {
    this.peopleInTheRoom = [];
    this._updateColor();
  }

  public delete(index: number) {
    this.peopleInTheRoom.splice(index, 1);
    this.peopleInTheRoom = [...this.peopleInTheRoom];
    this._updateColor();
  }

}
