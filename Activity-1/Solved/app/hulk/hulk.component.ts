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
  secretName = 'Bruce Banner';
  pathToImage = '../assets/images/hulk.jpeg';
  power: string = 'Incredible Strength';

  constructor() { }

  ngOnInit() {
  }

  // BONUS: We have set up an event listener to listen to clicks in our component's html
  revealSecretName() {
    // Here, this refers to the instance of our component 
    console.log('Secret codename is: ' + this.secretName);
  }

}
