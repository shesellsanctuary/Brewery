import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

import { Beer } from '../models/Beer';

@Injectable({
  providedIn: 'root'
})

export class BeerClient {
  serverPort = 3000;
  beersUrl:string = `http://localhost:${this.serverPort}`;
  beers:Beer[];
  socket: any;

  constructor() {
    this.socket = socketIo(this.beersUrl);
  }

  listen(event: string) {
    return new Observable((subscriber) =>{
      this.socket.on(event, (data) => {
        subscriber.next(data);
      })
    });

    // this.socket.on('beers', (res) => {
    //   this.beers = res;
    //   console.debug('Client: received = ', res);
    // });
  }

  // getBeers():Beer[] {
  //   console.debug('Client: Trying to get beers\n');
  //   return this.beers;
  // }
}
