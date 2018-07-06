import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OSComponent} from './os/os.component';
import {PLComponent} from './pl/pl.component';
import {DBComponent} from './db/db.component';
import {componentFactoryName} from '@angular/compiler';
import {ErrorPageComponent} from './error-page/error-page.component';

const routes: Routes = [
  {path : 'operating_system', component:OSComponent},
  {path : 'programming_language', component:PLComponent},
  {path : 'database', component:DBComponent},
  {path:'', component:OSComponent},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



