import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { RandomUserService } from './random-user.service';
import { RandomUserInfo } from "../assets/user-info";
import { TableTestComponent } from "./table-test/table-test.component";
import { Subscription, timer, switchMap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(TableTestComponent) tableComponent!: TableTestComponent;
  title = 'angular-async-pipe';
  randomUsers: RandomUserInfo[] = [];
  readonly InterValSecTime = 3000;
  subsclibe$!: Subscription;

  constructor(private randomUserService: RandomUserService) {
  }

  ngOnInit() {
    this.startProcess();
  }

  ngOnDestroy() {
    this.subsclibe$.unsubscribe();
  }

  /**
   * ランダムなユーザを取得し、テーブルに表示する。
   */
  startProcess() {
    this.subsclibe$ = timer(0, this.InterValSecTime)
      .pipe(switchMap(() => {
          return this.randomUserService.getRandomUsers();
        })
      )
      .subscribe((val: any) => {
          // データセットを更新する
          this.clearRandomUsers();
          this.pushRandomUsersToArray(val["results"]);
          // テーブルを更新する
          this.tableComponent.render();
        }
      )
  }

  pushRandomUsersToArray(dataSet: any){
    dataSet.map((data: any) => {
      this.randomUsers.push({
        name: data["name"]["first"] + " " + data["name"]["last"],
        country: data["location"]["country"],
        email: data["email"],
        age: data["dob"]["age"],
        picture: data["picture"]["thumbnail"]
      });
    });
  }

  clearRandomUsers(){
    this.randomUsers = [];
  }
}
