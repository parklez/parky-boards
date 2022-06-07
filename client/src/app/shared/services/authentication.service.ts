import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AuthData } from '../models/auth-data';
import { LoginData } from '../models/login-data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userJWT: string = '';
  authenticated = false;
  private authListener = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  signInUser(username: string, password: string) {
    const bodyData: AuthData = {username, password};
                  // FIXME: Change backend to return an object {token: '', expiresAt: Date}
    this.http.post<LoginData>('/api/login', bodyData).subscribe({
      next: (response) => {
        if (response) {
          // Save JWT & Set authentication to true
          this.userJWT = response.token;
          this.authenticated = true;
          const now = new Date();
          // Save to local storage
          this.saveLocalAuthData(
            response.token,
            new Date(now.getTime() + response.expiresIn * 1000)
          )
          this.authListener.next(true);
        }
      },
      error: (e) => {
        // TODO: Send errors back to component and return
        console.log(e)
      },
    })
  }

  signUpUser(username: string, password: string) {
    const bodyData: AuthData = {username, password};
    this.http.post<LoginData>('/api/register', bodyData).subscribe({
      next: (response) => {
        if (response) {
          // Save JWT & Set authentication to true
          this.userJWT = response.token;
          this.authenticated = true;
          const now = new Date();
          // Save to local storage
          this.saveLocalAuthData(
            response.token,
            new Date(now.getTime() + response.expiresIn * 1000)
          )
        }
      },
      error: (e) => {
        // TODO: Send errors back to component and return
        console.log(e)
      },
    })
  }

  private saveLocalAuthData(token: string, expiresAt: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresAt', expiresAt.toISOString());
  };

  private clearLocalAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
  }

  private fetchLocalAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem('expiresAt');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expiresAt: expirationDate
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getAuthListener() {
    return this.authListener.asObservable();
  }
}
