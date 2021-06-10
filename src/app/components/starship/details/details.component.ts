import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  shipDetails;
  shipDetailsKeys;
  blackList = ["name"];
  labels = [];

  constructor(
    public activatedRoute: ActivatedRoute
    , public api: ApiService) { }

  ngOnInit(): void {

    let shipId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getShipDetails(shipId);
  }

  getShipDetails(shipId) {
    this.api.request('starshipDetails', 'get', shipId, null).subscribe(res => {
      this.shipDetails = res;
      this.shipDetailsKeys = Object.keys(this.shipDetails);
      this.labels = this.shipDetailsKeys.map(a => this.capitalize(a.replace(/_/g, " ")));
      console.log("label", this.labels);
    });
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
