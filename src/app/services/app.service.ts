import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private appLoader = new BehaviorSubject<boolean>(false);

  getLoader() {
    return this.appLoader.asObservable();
  }

  setLoader(value: boolean) {
    this.appLoader.next(value);
  }
}
