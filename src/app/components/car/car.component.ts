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

  ngOnInit(): void {
    //this.carList == undefined ? this.dataService.seedCars() : null;
    //this.carList = this.storageService.get("Cars");

    

    // if (this.storageService.get("Cars") == undefined || this.storageService.get("Cars").length == 0) {
    //   this.dataService.seedCars();
    // }
    // this.filterCarList = this.carList;
    //  this.api.getCarList().subscribe(res=> {
    //    this.carList = res['data'];
    //   this.filterCarList =res['data'];
    //  }

    this.api.request("carList","get").subscribe(res=> {
         this.carList = res['data'];
        this.filterCarList =res['data'];
       }
      
    );
    this.arrayMap();
    this.arrayReducer();
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
    //console.log("Search Text", this.searchText);
  }

  clearSearch() {
    this.searchText = "";
    this.search();
  }

  arrayMap() {
    const myArray = [1, 2, 3, 4, 5];
    let mapped = [];
    mapped= myArray.map(x=>x*x);
    console.log("Mapped",mapped);
  }

  arrayReducer(){
    let obj = { key : "value" }



    const myArray = [1, 2, 3, 4, 5];
    const reducer= myArray.reduce((accumulator,currentValue)=> accumulator + currentValue);
    console.log("Reduced",reducer);

    const name="Abhi";
    const result =name.split("").reverse().join("");
    console.log("Reverse",result);

    const replace="Test.String,.."
    const final= replace.split(".").join("a");
    console.log("Replace",final);


  }
}
