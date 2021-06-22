import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(
    public storageService: StorageService
  ) { }

  hasRole(role) {
    const userStorageObject = this.storageService.get("user");
    return userStorageObject?.role == role;
  }
}
