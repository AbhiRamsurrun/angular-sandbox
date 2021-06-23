import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { PermissionService } from '../../../services/permission.service';
import { StorageService } from '../../../services/storage.service';
import { SettingsService } from '../../../services/settings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentTheme = "light";
  loginForm: FormGroup;
  loginDisplay = "";
  loginSuccess = false;

  constructor(
    public setting: SettingsService,
    public formBuilder: FormBuilder,
    public api: ApiService,
    public storageService: StorageService,
    public permission: PermissionService,
    public router : Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.setting.theme != undefined) {
      this.currentTheme = this.setting.theme;
    }

    let user = this.storageService.get("user");
    if (user) {
      this.loginSuccess = true;
      this.loginDisplay = 'Welcome ' + user['first_name'] + ' ' + user['last_name'];
    }

    this.setting.outsetTheme.subscribe(result => {
      console.log("Nav bar", result);
      this.currentTheme = result;
    });
  }

  login() {
    this.api.request("signIn", "post", null, this.loginForm.value).subscribe(result => {
      console.log("Result", result);
      let user = result['user'];
      this.loginSuccess = true;
      this.loginDisplay = 'Welcome ' + user['first_name'] + ' ' + user['last_name'];

      this.storageService.set("user", result['user']);
      this.storageService.set("token", result['token']);
      this.router.navigate(['/car']);
    });
  }

  logout() {
    this.loginSuccess = false;
    this.storageService.remove("user");
    this.storageService.remove("token");
  }
}
