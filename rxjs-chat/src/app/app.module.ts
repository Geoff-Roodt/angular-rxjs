import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UsersService} from './user/users.service';
import {MessagesService} from './message/messages.service';
import {ThreadsService} from './thread/thread.service';

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
    MessagesService,
    ThreadsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
