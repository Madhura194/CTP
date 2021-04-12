import { Injectable } from '@angular/core';
import TimeMe from 'timeme';
@Injectable({
  providedIn: 'root'
})
export class TimeMeTrackService {

  constructor() { }

InitializeTimeMe(pageName: string): void{
  TimeMe.setIdleDurationInSeconds(30);
  TimeMe.setCurrentPageName('');
  TimeMe.initialize();
}
}
