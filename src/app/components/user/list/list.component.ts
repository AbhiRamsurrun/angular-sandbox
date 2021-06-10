import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[]=[];

  constructor(
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.api.request('userList','get',null,null).subscribe(res=>{
        console.log("Users", res);
        this.users= res.data;
    });
  }
}
