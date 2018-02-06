import { Component, Inject } from '@angular/core';

// Import our static chat data
import {ChatExampleData} from './data/chat-example-data';

import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public messagesService:MessagesService, public threadsService:ThreadsService, public usersService:UsersService){
    // Set up the chat data
    ChatExampleData.init(messagesService, threadsService, usersService);
  }


}
