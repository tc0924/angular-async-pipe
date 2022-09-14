import {Component, AfterViewInit, ViewChild } from '@angular/core';
import { RandomUserService } from './random-user.service';
import { RandomUserInfo } from "../assets/user-info";
import { TableTestComponent } from "./table-test/table-test.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TableTestComponent) tableComponent!: TableTestComponent;
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
      this.tableComponent.render();
      // console.log(this.randomUsers);
    })
  }
}
