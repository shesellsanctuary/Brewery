import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/Beer';

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
    this.beers = [
      {
        id: 1,
        name: 'Pilsner',
        temperature: 7,
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
    ]
  }
}
