import { Component, AfterViewInit } from '@angular/core';
import { RandomUserService } from './random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-async-pipe';

  constructor(private randomUserService: RandomUserService) {}

  ngAfterViewInit() {
    this.getUsers();
  }

  getUsers(){
    this.randomUserService.getRandomUsers().subscribe((data:any) => {
      console.log(data);
    })
  }
}
