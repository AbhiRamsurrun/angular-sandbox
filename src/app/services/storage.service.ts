import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key, value) {
    const val = JSON.stringify(value);
    localStorage.setItem(key, val);
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
   }

   remove(key){
    localStorage.removeItem(key);
  }
}
