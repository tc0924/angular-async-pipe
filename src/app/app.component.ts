import { Component, AfterViewInit } from '@angular/core';
import { RandomUserService } from './random-user.service';
import { RandomUserInfo } from "../assets/user-info";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-async-pipe';
  randomUsers: RandomUserInfo[] = [];

  constructor(private randomUserService: RandomUserService) {}

  ngAfterViewInit() {
    this.getUsers();
  }

  getUsers(){
    this.randomUserService.getRandomUsers().subscribe((val:any) => {
      const dataSet:any = val["results"];
      dataSet.map((data: any) => {
        this.randomUsers.push({
          name: data["name"]["first"] + " " + data["name"]["last"],
          country: data["location"]["country"],
          email: data["email"],
          age: data["dob"]["age"],
          picture: data["picture"]["thumbnail"]
        });
      });
      console.log(this.randomUsers);
    })
  }
}
