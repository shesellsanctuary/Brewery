import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';

import { Beer } from '../models/Beer';

@Injectable({
  providedIn: 'root'
})

export class BeerClient {
  beersUrl:string = 'http://localhost:3000';
  beers:Beer[];
  private socket;

  initSocket(): void {
    this.socket = socketIo(this.beersUrl);
    this.socket.on('beers', (res) => {
      this.beers = res;
      console.debug('Client: received = ', res);
    });
  }

  getBeers():Beer[] {
    console.debug('Client: Trying to get beers\n');
    return this.beers;
  }
}
