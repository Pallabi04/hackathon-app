import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { StateDetailsService } from './../state-details.service';

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
  diseaseData:any;
  id: any;
  showToolTip:boolean = false;
  data:any = [];
  test:true;
  dataPie:any;
  activeState= [];
  inactiveState= [];
  allPaths= {}
  @ViewChild('openBtn') openBtn : ElementRef;
  constructor(private elementRef:ElementRef, private _states: StateDetailsService) {

    this.dataPie = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };
  }

  ngOnInit() {
    this.data = [
      {
        'state':"Jammu and Kashmir",
        "id":"IN-JK"
      },
      {
        'state':"West Bengal",
        "id":"IN-WB"
      },
      {
        'state':"Himachal Pradesh",
        "id":"IN-HP"
      },
      {
        'state':"Arunachal Pradesh",
        "id":"IN-AP"
      }
    ];
    this.diseaseData= [
      {
        "diseaseName":"Dengue",
        "percentage":"15%",
        "states":[
          {
            'state':"Arunachal Pradesh",
            "id":"IN-AP"
          },
          {
            'state':"Himachal Pradesh",
            "id":"IN-HP"
          },
          {
            'state':"West Bengal",
            "id":"IN-WB"
          }
        ]
      },
      {
        "diseaseName":"Chicken Pox",
        "percentage":"45%",
        "states":[
          {
            'state':"Jammu & Kashmir",
            "id":"IN-JK"
          },
          {
            'state':"Himachal Pradesh",
            "id":"IN-HP"
          },
          {
            'state':"West Bengal",
            "id":"IN-WB"
          }
        ]
      }

    ]
  }

  ngAfterViewInit() {

    //console.dir(this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes);
    // this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes
    //                               .addEventListener('click', this.toggleState.bind(this));
    for(let path of this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes) {
      path.addEventListener('click', this.toggleState.bind(this));
      path.addEventListener('mouseover', this.changeStyle.bind(this));
      path.addEventListener('mouseout', this.changeStyle2.bind(this));
      if(path.id) {
        this.allPaths[path.id] = path;
      }
    }
  }
  changeStyle(event) {
    //console.log('Good Idea',this.allPaths);
    this.id = event.target.id
    event.target.classList.add('active');
    this.showToolTip = true;
  }

  changeStyle2(event) {
    console.log(''+event);
    this.showToolTip = false;
    event.target.classList.remove('active');
  }

  toggleState(event) {
    console.log(3, event);
    this.openBtn.nativeElement.click();
  }
  test1(index,event) {
    this.activeState = [];
    for(let i of this.diseaseData[index].states){
      console.log(i['id']);
      this.activeState.push(i['id']);
    }

    for(let i in this.allPaths) {
      //this.allPaths[i['id']].classList.add('active1');
      if(this.activeState.indexOf(i) > -1){
        this.allPaths[i].classList.add('active1');
        this.allPaths[i].classList.remove('basic');
      }else{
        this.allPaths[i].classList.remove('active1');
        this.allPaths[i].classList.add('basic');
      }
    }
  }
  /*test1(index,event) {
    console.log(this.diseaseData[index].states);
    // for(let path of this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes) {
    //   path.addEventListener('click', this.clickEvent.bind(this));
    // }
    for(let i of this.diseaseData[index].states){
      for(let path of this.elementRef.nativeElement.childNodes[0].childNodes[1].childNodes) {
        if(i['id'] == path.id){
          let curClass = Array.prototype.slice.call(path.classList);
          if(curClass.indexOf('active1') < 0) {
            //this.activeClass.push(path);
            console.log('here');
            path.classList.add('active1');
          }

          //path.classList.remove('basic');

        }else{
          //path.classList.add('basic');
          if(path.classList) {
            let curClass = Array.prototype.slice.call(path.classList);
            // if(curClass.indexOf('active1') > 0) {
            //
            //   this.activeClass.splice(path);
            //   path.classList.remove('active1');
            // }
            //console.log(path);
            //path.classList.add('basic');
            //path.classList.remove('active1');

          }
        }
      }
    }
    //console.log(this.activeState);
  }*/

  // clickEvent(event){
  //   event.target.classList.remove('active');
  // }

}
