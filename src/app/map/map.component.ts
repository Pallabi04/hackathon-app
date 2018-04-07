import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    console.dir(this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes);
    // this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes
    //                               .addEventListener('click', this.toggleState.bind(this));
    for(let path of this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes) {
      path.addEventListener('click', this.toggleState.bind(this));
      path.addEventListener('mouseover', this.changeStyle.bind(this));
      path.addEventListener('mouseout', this.changeStyle2.bind(this));
    }
  }
  changeStyle(event) {
    console.log(event);
    event.target.classList.add('active');
  }

  changeStyle2(event) {
    console.log('2'+event);
    event.target.classList.remove('active');
  }

  toggleState(event) {
    //this.state = this.state === 'active' ? 'inactive' : 'active';
    //event.target.classList.add('active');
    console.log(3, event);
    console.log(3, event.class);
    event.state =  'active';
  }
}
