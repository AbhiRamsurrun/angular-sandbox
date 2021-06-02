import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      ref: ['',Validators.required],
      name: ['',Validators.required],
      body_type: ['',Validators.required],
      engine: ['',Validators.required],
      mileage: ['',Validators.required],
      fuel_type: ['',Validators.required],
      transmission: ['',Validators.required],
      door_count: ['',Validators.required],
      image_car: ['',Validators.required],
      price: ['',Validators.required],
      description: ['',Validators.required],
      desc_excerpt: ['',Validators.required],
      date_online: ['',Validators.required],
      date_offline: ['',Validators.required],
      currency: ['',Validators.required],
      contact_phone: ['',Validators.required],
      contact_email: ['',Validators.required]
    });
  }

  addCar(){
    console.log("car From", this.carForm.value);
  }
}
