import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentInfoFetchService } from './student-info-fetch.service';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentInfoFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

