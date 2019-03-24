import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor() { }

  getBeers() {
    return [
      {
        id: 1,
        name: 'Pilsner',
        temperature: 8,
        idealTemp: [4,6]
      },
      {
        id: 2,
        name: 'IPA',
        temperature: 5,
        idealTemp: [5,6]
      },
      {
        id: 3,
        name: 'Lager',
        temperature: 5,
        idealTemp: [4,7]
      },
      {
        id: 4,
        name: 'Stout',
        temperature: 6,
        idealTemp: [6,8]
      },
      {
        id: 5,
        name: 'Wheat beer',
        temperature: 2,
        idealTemp: [3,5]
      },
      {
        id: 6,
        name: 'Pale Ale',
        temperature: 7,
        idealTemp: [4,6]
      }
    ];
  }
}
