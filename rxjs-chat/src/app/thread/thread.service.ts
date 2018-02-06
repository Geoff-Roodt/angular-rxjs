import {Injectable} from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {Thread} from './thread.model';
import {Message} from '../message/message.model';
import {MessagesService} from '../message/messages.service';
import * as _ from 'lodash';

// Declare the thread service as an injectable
@Injectable()
export class ThreadsService{
  threads: Observable<{[key:string]: Thread}>;
  orderedThreads: Observable<Thread[]>;
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(new Thread());
  currentThreadMessages: Observable<Message[]>;

  constructor(private messagesService:MessagesService){

    // Setting up our threads variable to contain the appropriate messages
    this.threads = messagesService.messages.map( (messages:Message[]) => {
      const threads: {[key: string]: Thread} = {};
      messages.map((message: Message) => {
        threads[message.thread.id] = threads[message.thread.id] || message.thread;

        const messagesThread: Thread = threads[message.thread.id];
        if (!messagesThread.lastMessage || messagesThread.lastMessage.sentAt < message.sentAt){
          messagesThread.lastMessage = message;
        }
      });
      return threads;
    });

    // Sort the thread messages by the sent timestamp, incase they get jumbled up
    this.orderedThreads = this.threads.map((threadGroups: {[key:string]:Thread}) => {
      const threads:Thread[] = _.values(threadGroups);
      return _.sortBy(threads, (t:Thread) => t.lastMessage.sentAt).reverse();
    });

    // Combine our current thread with the associated messages or if none exist return an empty collection
    this.currentThreadMessages = this.currentThread.combineLatest(messagesService.messages, (currentThread: Thread, messages: Message[]) => {
      if (currentThread && messages.length > 0){
        return _.chain(messages).filter((message:Message) => (message.thread.id === currentThread.id)).map((message:Message) => {
          message.isRead = true;
          return message;
        }).value();
      }
      else{
          return [];
      }
    });

    // Subscribe to the mark as read method, for when the thread is selected
    this.currentThread.subscribe(this.messagesService.markThreadAsRead);

  }

  setCurrentThread(newThread: Thread):void{
    this.currentThread.next(newThread);
  }

}

export const ThreadsServiceInjectables: Array<any> = [
  ThreadsService
];
