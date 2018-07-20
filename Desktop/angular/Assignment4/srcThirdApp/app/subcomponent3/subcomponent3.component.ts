import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {

  public books = [];
  constructor(private _bookservice:BookServiceService) { }

  ngOnInit() {
    this.books = this._bookservice.GetBookDetails();
  }

}
