import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/Beer';
import { BeerClient } from '../../services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beers:Beer[];
  
  constructor (private beerService:BeerClient) {}

  ngOnInit() {
    console.debug('Client: On Init');
    this.beerService.socket.on('beers', (beers) => {
      this.beers = beers;
    })
  }
}
