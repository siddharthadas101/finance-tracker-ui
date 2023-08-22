import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app.component';
import { EntryItemComponent } from './components/entry-components/entry-item/entry-item.component';
import { EntryComponent } from './components/entry-components/entry/entry.component';
import BasicGridComponent from './components/grid-components/basic-grid/basic-grid.component';
import { AddItemComponent } from './components/buttons/add-item/add-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    EntryItemComponent,
    EntryComponent,
    BasicGridComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
