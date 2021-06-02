import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentTheme = "light";

  constructor(public setting: SettingsService) { }

  ngOnInit(): void {

    if (this.setting.theme != undefined) {
      this.currentTheme = this.setting.theme;
    }
    this.setting.outsetTheme.subscribe(result => {
      console.log("Nav bar", result);
      this.currentTheme = result;
    });
  }
}
