import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Car } from '../../models/car';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  //carList: Car[] = [];

  constructor(
    public dataService: DataService,
    public storageService: StorageService) {
  }
  tableView = false;

  ngOnInit(): void {
    this.carList == undefined ? this.dataService.seedCars() : null;
    //this.carList = this.storageService.get("Cars");
  }

  deleteCar(ref: string) {
    this.carList = this.carList.filter(c => c.ref != ref);
    //this.storageService.set("Cars", this.carList);
  }

  toggleView(){
    this.tableView= !this.tableView;
  }
  set carList(value){
    this.storageService.set("Cars", value);
  }

  get carList():Car[] {
    return this.storageService.get("Cars");
  }
}
