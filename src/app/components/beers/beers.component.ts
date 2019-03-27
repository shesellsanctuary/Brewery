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
    this.beerService.listen('beers').subscribe((beers) => {
      console.debug('Client: Got beers: ', beers);
    })
  }

  changeName(name:string):void {
    this.name = name;
  }

  ngOnInit() {
    console.debug('Client: On Init');
    // this.beerService.listen('beers').subscribe((beers) => {
    //   console.debug('Client: Got beers: ', beers);
    // })

    // this.beerService.initSocket();
    // console.debug('Client: Connected\n');
    // this.beers = this.beerService.getBeers();
  }
}
