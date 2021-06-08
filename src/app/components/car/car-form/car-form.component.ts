import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup;
  carList: Car[];
  carSlug = '';

  constructor(
    public formBuilder: FormBuilder,
    public storageService: StorageService,
    public activatedRoute: ActivatedRoute,
    public api: ApiService,
    public router: Router) {
  }

  ngOnInit(): void {
    this.carSlug = this.activatedRoute.snapshot.paramMap.get("slug");

    console.log("Activated Route", this.carSlug);

    this.carForm = this.formBuilder.group({
      ref: ['', Validators.required],
      name: ['', Validators.required],
      body_type: ['', Validators.required],
      engine: ['', Validators.required],
      mileage: ['', Validators.required],
      fuel_type: ['', Validators.required],
      transmission: ['', Validators.required],
      door_count: ['', Validators.required],
      image_car: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      desc_excerpt: ['', Validators.required],
      date_online: ['', Validators.required],
      date_offline: ['', Validators.required],
      currency: ['', Validators.required],
      contact_phone: ['', Validators.required],
      contact_email: ['', Validators.required]
    });

    this.carList = this.storageService.get("Cars");
    console.log("car List", this.carList);

    if (this.carSlug) {
      // let carDetail = this.carList.find(a => a.slug == this.carSlug);
      // this.carForm.patchValue(carDetail);
      this.carSlug = this.api.request("carDetails", "get", this.carSlug).subscribe(
        result => {
          console.log("Res", result);
          this.carForm.patchValue(result);
        }
      );
    }
  }

  addCar() {
    // this.carForm.value['_id'] = '04';
    //this.carList.push(this.carForm.value);
    // console.log("car List updated", this.carList);
    // this.storageService.set("Cars", this.carList);
    this.api.request("addCar", "post", null, this.carForm.value).subscribe(r => {
      console.log("Result", r);
    });
    Swal.fire("Success", "New car added successfully", "success")
  }

  editCar() {
    this.api.request("editCar", "put", this.carSlug, this.carForm.value).subscribe(async (result) => {
      if (result) {
        try {
          const { value: value } = await Swal.fire('Updated', 'Car has been updated' + result.slug, 'success');
          if (value) {
            this.router.navigate(['/car']);
          }
        }
        catch (e) {
          console.log(e);
        }

        //Instead of using the below, we use async await
        // Swal.fire('Updated', 'Car has been updated' + result.slug, 'success').then((value) => {
        //   console.log("Value:", value);
        //   if (value.value) {
        //     this.router.navigate(['/car']);
        //   }
        // });
        if (this.carSlug != result.slug) {

        }
      }
    },
      error => {
        console.error("Issue on edit:", error);
      }
    );
  }
}
