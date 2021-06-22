import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  shipId;
  constructor(
    public activatedRoute: ActivatedRoute,
    public api: ApiService,
    public router: Router) { }

  ngOnInit(): void {

    this.shipId = this.activatedRoute.snapshot.paramMap.get("id");
    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        const id = res['url'].split('/')[2];
        this.shipId = id;
        console.log("Id", id);
        this.getShipDetails();
      }
    });
    this.getShipDetails();
  }

  getShipDetails() {
    this.api.request('starshipDetails', 'get', this.shipId, null).subscribe(res => {
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
