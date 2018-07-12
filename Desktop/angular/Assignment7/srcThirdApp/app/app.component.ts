import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  Cars =  [
    {name: 'Hatchback'},
    {name: 'Sedan'},
    {name: 'MPV'},
    {name: 'SUV'},
    {name: 'Crossover'}
  ];
  
  Colors = [
    'Red',
    'Green',
    'Yellow',
    'Blue'
  ];

  Seats = [
    4,
    6,
    8
  ];
  selectedValue:string;
}

