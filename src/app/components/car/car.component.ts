import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { Car } from '../../models/car';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  carList: Car[] = [];

  constructor(
    public dataService: DataService,
    public storageService: StorageService,
    public api: ApiService) {
  }
  tableView = false;
  searchText: string;
  filterCarList;
  toModal = "Vat 18%";
  showAddCarButton: boolean = false;

  ngOnInit(): void {
    if (this.storageService.get("CarsList") == undefined || this.storageService.get("CarsList").length == 0) {
      this.api.request("carList", "get").subscribe(res => {
        this.carList = res['data'];
        this.filterCarList = res['data'];
        this.storageService.set("CarsList", this.filterCarList);
      }
      );
    }
    else {
      this.filterCarList = this.storageService.get("CarsList")
    }
    // this.filterCarList = this.carList;
    //  this.api.getCarList().subscribe(res=> {
    //    this.carList = res['data'];
    //   this.filterCarList =res['data'];
    //  }


    // this.arrayMap();
    // this.arrayReducer();
    this.showAddCar();
  }

  showAddCar(){
    if(this.storageService.get("user")) {
      this.showAddCarButton = true;
    }
  }
  
  deleteCar(ref: string) {
    this.carList = this.carList.filter(c => c.ref != ref);
    //this.storageService.set("Cars", this.carList);
  }

  toggleView() {
    this.tableView = !this.tableView;
  }
  // set carList(value) {
  //   this.storageService.set("Cars", value);
  // }

  // get carList(): Car[] {
  //   return this.storageService.get("Cars");
  // }

  search() {
    if (this.searchText) {
      this.searchText = this.searchText.toLowerCase();
      this.filterCarList = this.carList.filter(c => {
        return c.name.toLowerCase().includes(this.searchText);
      });
      return;
    }
    this.filterCarList = this.carList;
  }

  clearSearch() {
    this.searchText = "";
    this.search();
  }

  arrayMap() {
    const myArray = [1, 2, 3, 4, 5];
    let mapped = [];
    mapped = myArray.map(x => x * x);

  }

  arrayReducer() {
    let obj = { key: "value" }
    const myArray = [1, 2, 3, 4, 5];
    const reducer = myArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    const name = "Abhi";
    const result = name.split("").reverse().join("");
    const replace = "Test.String,.."
    const final = replace.split(".").join("a");
  }

  ngOnDestroy() {
    this.storageService.set("CarsList", this.filterCarList);
    console.log("bye bye car")
  }
  
}
