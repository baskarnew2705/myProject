import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/authService/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  public menuRedirection(menuName: string): void {
    this.router.navigate([menuName]);
  }

  public logOut() {
    this.auth.loggedIn = false;
    this.router.navigate(['/login']);
  }


}
