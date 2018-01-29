import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {UsersService} from './user/users.service';
import {MessagesService} from './message/messages.service';
import {ThreadsService} from './thread/threads.service';

import { AppComponent } from './app.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatThreadsComponent
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
