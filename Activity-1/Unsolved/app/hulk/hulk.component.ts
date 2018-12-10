import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hulk',
  templateUrl: './hulk.component.html',
  styleUrls: ['./hulk.component.css']
})
export class HulkComponent implements OnInit {
  name: string = 'Hulk';
  // Since we are defining our string as we declare it, TypeScript infers its type.
  // If we were to try changing this variable to a number somewhere else in our code, TypeScript would throw an error.
  pathToImage = '../assets/images/hulk.jpeg';
  power: string = 'incredible strength';
  
  constructor() { }

  ngOnInit() {
  }

}
