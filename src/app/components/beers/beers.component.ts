import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/Beer';
import { BeerClient } from '../../services/beer.service';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers:Beer[];
  name:string = 'Emily';

  constructor() {
    this.changeName('Emily');
  }
  
  changeName(name:string):void {
    this.name = name;
  }
  
  ngOnInit() {
    console.debug('Client: On Init');
    socket.on('beers', (beers) => {
      this.beers = beers;
    })
    // this.beerService.listen('beers').subscribe((beers) => {
    //   console.debug('Client: Got beers: ', beers);
    // })

    // this.beerService.initSocket();
    // console.debug('Client: Connected\n');
    // this.beers = this.beerService.getBeers();
  }
}
