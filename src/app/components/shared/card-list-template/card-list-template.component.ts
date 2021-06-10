import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent implements OnInit {

  @Input() list;
  @Input() entity;

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    console.log("List", this.list)
    console.log("Entity", this.entity);
  }

  openStarship(url) {
    console.log("URL", url);
    const splitShipId = url.split("/");
    const id = splitShipId[5];

    this.router.navigate(['startShip/details/', id]);
  }
}
