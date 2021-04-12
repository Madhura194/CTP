import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VisibilityService {

  visibilityStatus = new Subject<boolean>();

get visibilityChanged(): any {
  return this.visibilityStatus.asObservable();
}

  constructor() {
    document.addEventListener('visibilitychange', () => {
      this.updateVisibilityStatus();
    }, false);
   }

   updateVisibilityStatus() {
     this.visibilityStatus.next(!document.hidden);
   }
}
