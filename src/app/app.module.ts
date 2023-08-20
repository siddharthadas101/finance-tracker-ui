import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { EntryItemComponent } from './components/entry-components/entry-item/entry-item.component';
import { EntryComponent } from './components/entry-components/entry/entry.component';

@NgModule({
  declarations: [
    App,
    EntryItemComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
