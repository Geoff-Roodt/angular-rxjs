import {Injectable} from '@angular/core';

// Imports the React components for us to leverage
import { Subject, BehaviorSubject } from 'rxjs';

import {User} from './user.model';

@Injectable()
export class UsersService{

  // Instantiate a User object using React
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser:User):void{
    this.currentUser.next(newUser);
  }

}

export const UserServiceInjectables: Array<any> = [
  UsersService
];
