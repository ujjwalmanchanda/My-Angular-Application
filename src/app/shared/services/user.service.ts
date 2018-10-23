import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = "http://localhost:54910";
  constructor(private http: HttpClient) { }

  registerUser(user: User)  { 
    const body: User = {
      UserName: user.UserName,
      Email: user.Email,
      Password: user.Password,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }
}
