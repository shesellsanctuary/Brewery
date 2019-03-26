import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/Beer';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers:Beer[];
  name:string = 'Emily';

  constructor(private beerService:BeerService) {
    this.changeName('Emily');

  }

  changeName(name:string):void {
    this.name = name;
  }

  ngOnInit() {
    // this.beers = this.beerService.getBeers();
    this.beerService.getBeers().subscribe(beers => {
      this.beers = beers;
      console.log(this.beers);
    });
  }
}
