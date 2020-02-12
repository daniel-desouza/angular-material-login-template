import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User>(`localhost:8080/users`);
  }

  register(user: User) {
    return this.http.post(`localhost:8080/users`, user);
  }

  delete(id: number) {
    return this.http.delete(`localhost:8080/users/${id}`);
  }
}
