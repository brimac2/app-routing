import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.scss']
})
export class UserEmailComponent {
  @Input()
  emails: string [] = [];
}
