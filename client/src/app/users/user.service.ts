import { Injectable } from '@angular/core';
import{ Http } from '@angular/http'

import "rxjs" 

import{ User } from "./user"

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  login(user: User){
    return this.http.post("/login", user)
            .map(data => data.json())
            .toPromise()
  }

  get_all_users(){
   return this.http.get("/all_users")
          .map(data => data.json())
          .toPromise()
  }

  logged_user(){
    return this.http.get("/logged_user")
          .map(data => data.json())
          .toPromise()
  }
  deleteUser(user: User){
    return this.http.delete(`/user/${user._id}`) //the is where you do the http req
          .map(data => data.json())
          .toPromise()
  }
}
