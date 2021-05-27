import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { CarComponent } from './components/car/car.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ModalComponent } from './components/shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    CarComponent,
    NavComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
