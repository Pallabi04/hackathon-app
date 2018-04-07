import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  animations: [
    trigger('mapState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(2)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  changeStyle(event) {
    console.log(event);
  }

  changeStyle2(event) {
    console.log('2'+event);
  }

  toggleState(event) {
    //this.state = this.state === 'active' ? 'inactive' : 'active';

    console.log(3, event);
    console.log(3, event.class);
    event.state =  'active';
  }
}
