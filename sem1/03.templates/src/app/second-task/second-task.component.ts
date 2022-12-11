import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.scss']
})
export class SecondTaskComponent {
  public max = 10;
  public current = 0;

  public color = 'green';

  public increase() {
    if (this.current >= this.max) {
      return;
    }
    this.current++;
    this._updateColor();
  }

  public decrease() {
    this.current--;
    this._updateColor();
  }

  private _updateColor() {
    if (this.current >= this.max) {
      this.color = 'red';

    } else if (this.max - this.current <= 3) {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }
}
