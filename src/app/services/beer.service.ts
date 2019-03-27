import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';

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
}
