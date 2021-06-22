import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['']
    },
      { validators: this.checkPassword }
    );
  }

  register() {

    if (this.registerForm.valid) {
      this.registerForm.controls.confirm_password.setValue(undefined);
      this.api.request("registration", "post", null, this.registerForm.value).subscribe(r => {
        console.log("Result", r);
        if (r.success) {
          this.router.navigate(['/car']);
        }
      });
    }

    // Swal.fire("Success", "User added successfully", "success")
  }

  checkPassword(group: FormGroup) {
    console.log("Pass", group.get('password').value, "Confirm Pass", group.get('confirm_password').value)
    return group.get('password').value === group.get('confirm_password').value ? null : { notSame: true };
  }
}
