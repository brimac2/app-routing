import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from '../../models/user-interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',

})
export class UserDetailsComponent {
  @Input()
  items: User[] =[];

  @Output()
  addEmail: EventEmitter<string> = new EventEmitter();

  addUserEmail(email: string): void {
    this.addEmail.emit(email)
  }
}
