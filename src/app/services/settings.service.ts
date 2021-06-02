import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _currentTheme = "";
  public outsetTheme: Subject<any> = new Subject();

  constructor(
    private storage: StorageService
  ) { }

  get theme() {
    return this.storage.get("Theme");
    //return this._currentTheme;
  }

  set theme(value) {
    this._currentTheme= value;
    this.outsetTheme.next(value);
    console.log("Settings: Set theme to", this._currentTheme);
    this.storage.set("Theme", value);
   }
}
