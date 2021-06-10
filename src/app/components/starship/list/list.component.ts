import { Component, OnInit } from '@angular/core';
import { starShip } from 'src/app/models/starShip';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class StarShipListComponent implements OnInit {

  starShips:starShip[]=[];
  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(){
    this.api.request('starShipFilms','get',null,null).subscribe(res=>{
      console.log("StartShips b", res);
      this.starShips=res['results'];
      console.log("results", this.starShips);
  });
  }
}
