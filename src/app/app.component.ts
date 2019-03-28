import { Component } from '@angular/core';
import { BeerClient } from './services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['node_modules/@nebular/theme/styles/prebuilt/default.css']
})
export class AppComponent {
  title = 'brewery';
  
  constructor(private beerService:BeerClient) {
  }
}
