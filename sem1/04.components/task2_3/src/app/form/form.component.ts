import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonAndPreference} from "../app.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public preferenceOptions = ['Angular', 'React', 'Vue'];
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
