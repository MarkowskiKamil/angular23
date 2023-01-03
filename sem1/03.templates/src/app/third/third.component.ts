import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  public max = 5;
  public people: Array<string> = [];

  public name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public add() {
    this.people.push(this.name);
    this.name = '';
  }

  public clearList() {
    this.people = [];
  }

  public remove(idx: number) {
    this.people.splice(idx, 1);
  }

}
