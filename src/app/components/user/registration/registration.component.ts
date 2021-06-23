import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  userId;
  user;

  constructor(
    public formBuilder: FormBuilder,
    public api: ApiService,
    public router: Router,
    public activatedRoute : ActivatedRoute
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
      { validators: [this.checkPassword.bind(this),this.passwordValidator.bind(this)] }
    );
    this.userId= this.activatedRoute.snapshot.paramMap.get("id");
    this.getUserDetail();
  }

  getUserDetail(){
    this.api.request("userList", "get", null, null).subscribe(result => {
      console.log("carDetails Result:", result['data']);
      this.user = result['data'].find( x => x._id == this.userId )
      this.registerForm.patchValue(this.user); 
    });
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
  }

  checkPassword(group: FormGroup) {
    if (!this.userId){
    console.log("Pass", group.get('password').value, "Confirm Pass", group.get('confirm_password').value)
    return group.get('password').value === group.get('confirm_password').value ? null : { notSame: true };
  }
  return null;
  }

  passwordValidator(group: FormGroup){
    if (!this.userId){
      return (group.get('password').value == "" ? {passwordEmpty : true} : null );
    }
    return null;
  }

  saveChanges() {
    this.registerForm.controls.password.setValue(undefined);
    this.api.request("editUser", "put", this.userId, this.registerForm.value).subscribe(async (result) => {
      console.log(result);
      try {
        const { value: value } = await Swal.fire('Updated', 'User has been updated', 'success');
        if (value) {
          this.router.navigate(['/users']);
        }
      }
      catch (e) {
        console.log(e);
      }
    });
  }
  editUser(){
    this.registerForm.controls.confirm_password.setValue(undefined);
    this.registerForm.controls.password.setValue(undefined);
    this.api.request("editUser","put", this.userId, this.registerForm.value).subscribe( async result => {
      console.log("Edit User", result);
      if (result) {
        try {
          let { value: value } = await Swal.fire('Updated', 'User has been updated!', 'success');
          if (value) {
            this.router.navigate(['/users']);
          }
        } catch (error) {
          console.error("Edit User:", error);
        }
      }
    });
  }
}
