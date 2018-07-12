import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  Cities =  [
    {name: 'Pune'},
    {name: 'Mumbai'},
    {name: 'Kolhapur'},
    {name: 'Delhi'},
    {name: 'Solapur'}
  ];
  
  selectedValue:string;
}

