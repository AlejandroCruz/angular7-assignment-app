import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(inName, inAction) {
    console.log('[My log] value: ' + inName + ', action: ' + inAction);
  }
}
