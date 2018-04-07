import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
@Input() formData:any;
@Input() id:any;
state:string;
  constructor() { }

  ngOnInit() {
     console.log("helooooo"+this.id);
     for(let props of this.formData){
         if(props.id == this.id) {
             this.state = props.state;
        }
     }
  }

}
