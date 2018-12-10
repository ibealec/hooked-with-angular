import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-widow',
  templateUrl: './black-widow.component.html',
  styleUrls: ['./black-widow.component.css']
})
export class BlackWidowComponent implements OnInit {
  name: string = 'Black Widow';
  // Since we are defining our string as we declare it, TypeScript infers its type.
  // If we were to try changing this variable to a number somewhere else in our code, TypeScript would throw an error.
  pathToImage = '../assets/images/black-widow.jpeg';
  power: string = 'Highly Trained Martial Arts';
  
  constructor() { }

  ngOnInit() {
  }

}
