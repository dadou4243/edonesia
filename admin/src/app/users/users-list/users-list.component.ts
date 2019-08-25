import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<any>;
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
    this.users$.subscribe(res => {
      console.log('res', res);
    });
  }
}
