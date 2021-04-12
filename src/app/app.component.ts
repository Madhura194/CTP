import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import TimeMe from 'timeme';
import { VisibilityService } from './services/visibility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'angular8-springboot-websocket';
  accmsg: string[] = [];

  greeting: any;
  name: string;
  constructor(private service: VisibilityService) {

  }

  ngOnInit(): void {
    TimeMe.setIdleDurationInSeconds(30);
    TimeMe.initialize();

    this.service.visibilityChanged.subscribe(visibility => {
      if (visibility) {
       console.log('User is active on page');
      } else {
      }
    });
  }

  getTimeSpent(): void{
    console.log('Active Time :', TimeMe.getTimeOnCurrentPageInSeconds());
    alert(TimeMe.getTimeOnCurrentPageInSeconds());
  }
}
