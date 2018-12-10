import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrick',
  templateUrl: './patrick.component.html',
  styleUrls: ['./patrick.component.css']
})
export class PatrickComponent implements OnInit {
  name: string = 'Patrick Star';
  // Since we are defining our string as we declare it, TypeScript infers its type.
  // If we were to try changing this variable to a number somewhere else in our code, TypeScript would throw an error.
  secretName = 'Mr. Dr. Professor Patrick';
  pathToImage = '../assets/images/patrick.png';
  power: string = 'Vast Intelligence';

  constructor() { }

  ngOnInit() {
  }

  // BONUS: We have set up an event listener to listen to clicks in our component's html
  revealSecretName() {
    // Here, this refers to the instance of our component 
    console.log('Secret codename is: ' + this.secretName);
  }

}
