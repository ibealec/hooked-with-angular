import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IronManComponent } from './iron-man/iron-man.component';
import { HulkComponent } from './hulk/hulk.component';

@NgModule({
  declarations: [
    AppComponent,
    HulkComponent,
    IronManComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
