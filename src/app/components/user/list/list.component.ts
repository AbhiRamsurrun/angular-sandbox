import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[] = [];

  constructor(
    public api: ApiService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    if (this.storageService.get("userList") == undefined || this.storageService.get("userList").length == 0) {
      this.api.request('userList', 'get', null, null).subscribe(res => {
        console.log("Users", res);
        this.users = res.data;
        this.storageService.set("userList", this.users);
      });
    }
    else {
      this.users = this.storageService.get("userList")
    }
  }

  ngOnDestroy() {
    this.storageService.set("userList", this.users);
    console.log("bye bye user")
  }

  // onReload(){
  //   this.storageService.set("userList", this.users);
  //   console.log("reload bye bye")
  // }
}
