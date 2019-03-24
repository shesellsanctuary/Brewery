import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../models/Beer';
@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() beer: Beer;
  constructor() { }

  ngOnInit() {
  }

  // set Dynamic Classes
  setClasses() {
    let classes = {
      'beer': true,
      'out-of-temperature': !(this.beer.temperature >= this.beer.idealTemp[0] && this.beer.temperature <= this.beer.idealTemp[1]),
      'in-temperature': this.beer.temperature >= this.beer.idealTemp[0] && this.beer.temperature <= this.beer.idealTemp[1]
    }
    return classes;
  }

  onToggle(beer) {
    console.log('toggle');
  } 
}
