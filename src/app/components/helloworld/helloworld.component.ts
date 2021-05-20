import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit {

  name = 'abhi';
  result:number;
  title:string ="I am a title";
  constructor() {}

  ngOnInit(): void {}

  getInputName(username: string) {
    this.name = username;
    console.log('it does nothing', username);
  }

  sum(num1, num2) {
    this.result = parseInt(num1) + parseInt(num2);
  }
}
