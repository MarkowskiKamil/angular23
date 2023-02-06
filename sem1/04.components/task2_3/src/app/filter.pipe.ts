import { Pipe, PipeTransform } from '@angular/core';
import {PersonAndPreference} from "./app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<PersonAndPreference>, preferenceToFilterBy: string) {
    if (!value) {
      return value;
    }

    return value.filter((item) => {
      if (item.preference === preferenceToFilterBy) {
        return true;
      }

      return false;
    });
  }

}
