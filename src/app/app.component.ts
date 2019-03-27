import { Component, OnInit } from '@angular/core';
import { BeerClient } from './services/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'brewery';
  
  constructor(private beerService:BeerClient) {
  }

  ngOnInit() {
    console.debug('Client: On Init');
    this.beerService.listen('beers').subscribe((beers) => {
      console.debug('Client: Got beers: ', beers);
    })
  }
}
