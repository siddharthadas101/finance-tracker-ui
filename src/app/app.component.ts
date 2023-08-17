import { Component } from '@angular/core';
import appData from './data/base-data.json';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  appData = appData;
}
