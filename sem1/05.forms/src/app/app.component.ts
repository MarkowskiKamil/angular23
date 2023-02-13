import { Component } from '@angular/core';

interface FormData {
  name: string;
  email: string;
  translated: boolean;
  language?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public onSubmit(data: FormData) {
    console.log(data);
  }
}
