import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FirstTaskComponent } from './first-task/first-task.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import {ThirdComponent} from "./third/third.component";
@NgModule({
  declarations: [
    AppComponent,
    FirstTaskComponent,
    SecondTaskComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
