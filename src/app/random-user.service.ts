import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  readonly url = "https://randomuser.me/api/?results=10";

  constructor(private http:HttpClient) { }

  getRandomUsers() {
    return this.http.get<any>(this.url);
  }

}
