import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonAndPreference} from "../app.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() public preferenceOptions!: Array<string>;
  public name = '';
  public preference = '';

  @Output() submit = new EventEmitter<PersonAndPreference>();

  constructor() { }

  ngOnInit(): void {
  }

  public add() {

    this.submit.emit({
      name: this.name,
      preference: this.preference
    });

    this.name = '';
    this.preference = '';
  }

}
