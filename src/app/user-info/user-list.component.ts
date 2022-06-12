import { Component, OnInit } from '@angular/core';
import { User } from './models/user-interface';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  emails: string[] = [];

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        first_name: 'Kathryne',
        last_name: 'Maha',
        email: 'kmaha0@godaddy.com',
        gender: 'Female',
      },
      {
        id: 2,
        last_name: 'Huckerbe',
        email: 'ghuckerbe1@umich.edu',
        gender: 'Male',
      },
      {
        id: 3,
        first_name: 'Donnell',
        last_name: 'McCory',
        email: 'dmccory2@jalbum.net',
        gender: 'Male',
      },
      {
        id: 4,
        first_name: 'Abagael',
        last_name: 'Whyte',
        email: 'awhyte3@prnewswire.com',
        gender: 'Female',
        ip_address: '241.35.27.220',
      },
      {
        id: 5,
        first_name: 'Gui',
        last_name: 'Skiggs',
        email: 'gskiggs4@craigslist.org',
        gender: 'Female',
        ip_address: '46.63.226.129',
      },
      {
        id: 6,
        first_name: 'Parsifal',
        last_name: 'Sherbrooke',
        email: 'psherbrooke5@ucoz.ru',
        gender: 'Male',
        ip_address: '46.168.167.85',
      },
      {
        id: 7,
        last_name: 'Sainer',
        email: 'msainer6@state.tx.us',
        gender: 'Female',
      },
      {
        id: 8,
        last_name: "O'Gavin",
        email: 'jogavin7@webeden.co.uk',
        gender: 'Female',
      },
      {
        id: 9,
        first_name: 'Faunie',
        last_name: "O'Dogherty",
        email: 'fodogherty8@hatena.ne.jp',
        gender: 'Female',
      },
      {
        id: 10,
        last_name: 'Atchly',
        email: 'iatchly9@walmart.com',
        gender: 'Male',
      },
    ];
  }
  public addUserEmail(email: string): void {
    this.emails.push(email);
  }
}
