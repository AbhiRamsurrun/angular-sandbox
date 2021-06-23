import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from '../../../services/permission.service';
import { StorageService } from '../../../services/storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'card-list-template',
  templateUrl: './card-list-template.component.html',
  styleUrls: ['./card-list-template.component.scss']
})
export class CardListTemplateComponent implements OnInit {

  @Input() list;
  @Input() entity;

  constructor(
    public router: Router,
    public storageService: StorageService,
    public permission : PermissionService) {
  }

  ngOnInit(): void {
    console.log("List", this.list)
    console.log("Entity", this.entity);
  }

  editUser(userId){
    console.log("User ID",userId);
    this.router.navigate(['/users', userId]);
  }

  openStarship(url) {
    console.log("URL", url);
    const splitShipId = url.split("/");
    const id = splitShipId[5];
    this.router.navigate(['startShip/', id]);
  }

  getReactionFromService(itemName){
    return this.storageService.get(itemName);
  }

  unLikeItem(item) {
    Swal.fire({
      title: 'Are you sure you want to unlike this image?',
      text: 'You can always give it a like',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, unlike it!',
      cancelButtonText: 'No, keep it'
    }).then((value) => {
      console.log("Value:", value);
      if (value.isConfirmed) {
        item.liked = false;
      }
    });
  }

  likeItem(item) {
    item.liked = true;
    //this.storageService.set("Cars", item);   
  }
}
