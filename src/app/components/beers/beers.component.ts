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
  name:string = 'Emily';

  constructor(private beerService:BeerClient) {
    this.changeName('Emily');

  }

  changeName(name:string):void {
    this.name = name;
  }

  ngOnInit() {
    this.beerService.initSocket();
    console.debug('Client: Connected\n');
    this.beers = this.beerService.getBeers();
  }
}
