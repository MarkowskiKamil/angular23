import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  @Output() public formChange = new EventEmitter<string>();

  public name: string = '';
  public familyName: string = '';
  public editing = true;
  public fullName: string | null = null;


  constructor() { }

  ngOnInit(): void {
  }

  public submit() {
    this.editing = false;
    this.fullName = this.name + ' ' + this.familyName;

    this.formChange.emit(this.fullName);
  }

  public edit() {
    this.editing = true;
    this.formChange.emit('');
  }

}
