import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sub-app',
  templateUrl: './sub-app.component.html',
  styleUrls: ['./sub-app.component.css']
})
export class SubAppComponent implements OnInit {

  @Input() public parentData;
  @Output() public MyNewEvent = new EventEmitter();

  public SendEvent()
  {
    this.MyNewEvent.emit('Hi from child');
  }
  constructor() { }

  ngOnInit() {
  }

}


