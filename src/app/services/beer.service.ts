import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Beer } from '../models/Beer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class BeerService {
  beersUrl:string = 'http://localhost:3000/beers';

  constructor(private http:HttpClient) { }

  // toggleCompleted(beer:Beer):Observable<any> {
  //   const url = `${this.beersUrl}/${beer.id}`
  //   return this.http.put(url, beer, httpOptions);
  // }
  
  getBeers():Observable<Beer[]> {
    return this.http.get<Beer[]>(this.beersUrl);
  }
  // getBeers() {
  //   return [
  //       {
  //         id: 1,
  //         name: 'Pilsner',
  //         temperature: 5,
  //         idealTemp: [4,6]
  //       },
  //       {
  //         id: 2,
  //         name: 'IPA',
  //         temperature: 5,
  //         idealTemp: [5,6]
  //       },
  //       {
  //         id: 3,
  //         name: 'Lager',
  //         temperature: 5,
  //         idealTemp: [4,7]
  //       },
  //       {
  //         id: 4,
  //         name: 'Stout',
  //         temperature: 6,
  //         idealTemp: [6,8]
  //       },
  //       {
  //         id: 5,
  //         name: 'Wheat beer',
  //         temperature: 2,
  //         idealTemp: [3,5]
  //       },
  //       {
  //         id: 6,
  //         name: 'Pale Ale',
  //         temperature: 7,
  //         idealTemp: [4,6]
  //       }
  //     ];
  // }
}
