import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { HelloworldComponent } from './components/helloworld/helloworld.component';
import { CarComponent } from './components/car/car.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { UserComponent } from './components/user/user.component';
import { CarFormComponent } from './components/car/car-form/car-form.component';
import { NgxLoadingModule } from 'ngx-loading';
import { InterceptorsProviders } from './interceptors/interceptors';
import { LoadigComponent } from './components/shared/loadig/loadig.component';
import { UploadDirective } from './directives/upload.directive';
import { ListComponent } from './components/user/list/list.component';
import { StarShipListComponent } from './components/starShip/list/list.component';
import { CardListTemplateComponent } from './components/shared/card-list-template/card-list-template.component';
import { DetailsComponent } from './components/starship/details/details.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ChatComponent } from './components/chat/chat.component';
import { PopupChatComponent } from './components/shared/popup-chat/popup-chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    CarComponent,
    NavComponent,
    ModalComponent,
    UserComponent,
    CarFormComponent,
    LoadigComponent,
    UploadDirective,
    ListComponent,
    CardListTemplateComponent,
    StarShipListComponent,
    DetailsComponent,
    RegistrationComponent,
    ChatComponent,
    PopupChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    InterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
