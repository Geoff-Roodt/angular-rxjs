import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UsersService} from './user/users.service';
import {MessagesService} from './message/messages.service';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UsersService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
