import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubComponent1Component } from './sub-component1/sub-component1.component';
import { SubComponent2Component } from './sub-component2/sub-component2.component';
import { Subcomponent3Component } from './subcomponent3/subcomponent3.component';
import {BookServiceService} from './book-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent1Component,
    SubComponent2Component,
    Subcomponent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

