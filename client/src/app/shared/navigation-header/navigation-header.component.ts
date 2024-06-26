import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css'],
})
export class NavigationHeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  username!: string;

  private authListener: Subscription = new Subscription();

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated();
    // This constantly checks for any change in the state of authentication, true or false.
    this.authListener = this.auth
      .getAuthListener()
      .subscribe((user) => {
        this.isAuthenticated = user.isAuthenticated;
        this.username = user.username;
      });
  }

  ngOnDestroy() {
    this.authListener.unsubscribe();
  }
}
