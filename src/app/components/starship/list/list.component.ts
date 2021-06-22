import { Component, OnInit } from '@angular/core';
import { starShip } from 'src/app/models/starShip';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class StarShipListComponent implements OnInit {

  starShips: starShip[] = [];
  constructor(public api: ApiService,
    public storageService: StorageService) { }

  ngOnInit(): void {
    this.geStarships();
  }

  geStarships() {
    if (this.storageService.get("starShipFilms") == undefined || this.storageService.get("starShipFilms").length == 0) {
      this.api.request('starShipFilms', 'get', null, null).subscribe(res => {
        console.log("StartShips b", res);
        this.starShips = res['results'];
        console.log("results", this.starShips);
        this.storageService.set("starShipFilms", this.starShips);
      });
    }
    else{
      this.starShips = this.storageService.get("starShipFilms")
    }    
  }
  
  ngOnDestroy() {
    this.storageService.set("starShipFilms", this.starShips);
    console.log("bye bye starship")
  }
}
