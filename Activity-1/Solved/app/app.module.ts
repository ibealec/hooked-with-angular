import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IronManComponent } from './iron-man/iron-man.component';
import { BlackWidowComponent } from './black-widow/black-widow.component';
import { HulkComponent } from './hulk/hulk.component';
import { PatrickComponent } from './patrick/patrick.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackWidowComponent,
    HulkComponent,
    IronManComponent,
    PatrickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
