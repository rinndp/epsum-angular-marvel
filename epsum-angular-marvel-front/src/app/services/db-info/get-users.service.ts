import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  url: string = "http://localhost:8080/api/users";

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    return this.http.get<any>(`${this.url}`);
  }
}
