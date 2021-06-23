import { Component, OnInit } from '@angular/core';
import { confirmable } from 'src/app/decorators/confirmableDecorator';
import { execTimeDecorator } from 'src/app/decorators/execTimeDecorator';
import { roundedDecorator } from 'src/app/decorators/roundedDecorator';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit {

  name = 'abhi';
  result: number;
  title: string = "I am a title";

  @roundedDecorator(10) ceilNum1: number = 5.3;
  @roundedDecorator(10) ceilNum2: number;

  constructor() { }

  ngOnInit(): void {
    console.log(environment.test);
  }

  getInputName(username: string) {
    this.name = username;
    console.log('it does nothing', username);
  }

  //@execTimeDecorator
  sum(num1, num2) {
    let as = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(x => x % 2)
    console.log(as)
    this.result = parseInt(num1) + parseInt(num2);
    //this.longRunningMethod();
  }

  longRunningMethod() {
    let arrayCount = 5000;
    let dynamicArrays = [];
    for (let j = 0; j < arrayCount; j++)
      dynamicArrays[j] = [];
    let lastLongI = 1;
    for (let i = 0; i < 5000; i++) {
      for (let j = 0; j < arrayCount; j++) dynamicArrays[j][i] = i;
    }
  }

  @confirmable({
    title: "Hello world?",
    toast: true
  })
  testConfirmable() {
    this.name = "username";
  }
}

