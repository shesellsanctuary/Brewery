import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../models/Beer';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() beer: Beer;
  constructor(private beerService:BeerService) { }

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

    // this.beerService.toggleCompleted(beer).subscribe(berr =>
    //   console.log(beer));
  } 
}
