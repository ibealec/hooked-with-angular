import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iron-man',
  templateUrl: './iron-man.component.html',
  styleUrls: ['./iron-man.component.css']
})
export class IronManComponent implements OnInit {
  name: string = 'Iron Man';
  // Since we are defining our string as we declare it, TypeScript infers its type.
  // If we were to try changing this variable to a number somewhere else in our code, TypeScript would throw an error.
  pathToImage = '../assets/images/tony.jpeg';
  power: string = 'Brilliant Creativity';

  constructor() { }

  ngOnInit() {
  }

}
