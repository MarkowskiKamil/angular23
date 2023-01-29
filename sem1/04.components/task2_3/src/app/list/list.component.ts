import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PersonAndPreference} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public data: Array<PersonAndPreference> = [];
  @Output() public deleteClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public delete(index: number) {
    this.deleteClicked.emit(index);
  }

}
