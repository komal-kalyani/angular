import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  author: string;
  no_of_pages: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'C programming language', author: 'XYZ', no_of_pages: 500, price: 3000},
  {position: 2, name: 'C++ programming language', author: 'ABC', no_of_pages: 1000, price: 10000},
  {position: 3, name: 'Java programming language', author: 'PQR', no_of_pages: 700, price: 400},
  {position: 4, name: 'C# programming language', author: 'EFG', no_of_pages: 3000, price: 600},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  displayedColumns: string[] = ['position', 'name', 'author', 'no_of_pages', 'price'];
  dataSource = ELEMENT_DATA;
}

