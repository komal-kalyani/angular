import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  GetBookDetails()
  {
    return[
      {"Name":"C Programming Language", "Price":1000, "Author":"ABC", "NoOfPages":200},
      {"Name":"C++ Programming Language", "Price": 500, "Author": "EFG", "NoOfPages": 1000},
      {"Name":"Java", "Price":300, "Author":"xyz", "NoOfPages":400},
    ];
  }
}



