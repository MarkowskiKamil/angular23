import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.scss']
})
export class FirstTaskComponent {
  public name = '';
  public familyName = '';

  public greet() {
    if (this.name) {
      alert('hello ' + this.name);
    }
  }

  public bye() {
    alert('bye');
  }
}
