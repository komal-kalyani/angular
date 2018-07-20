import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-sub-component2',
  templateUrl: './sub-component2.component.html',
  styleUrls: ['./sub-component2.component.css']
})
export class SubComponent2Component implements OnInit {

  public books = [];
  constructor(private _bookservice:BookServiceService) { }

  ngOnInit() {
    this.books = this._bookservice.GetBookDetails();
  }

}

