import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public httpclient: HttpClient, public users: UsersService) {
  }
}
