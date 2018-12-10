import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrick',
  templateUrl: './patrick.component.html',
  styleUrls: ['./patrick.component.css']
})
export class PatrickComponent implements OnInit {
  name: string = 'Patrick Star';
  secretName = 'Mr. Dr. Professor Patrick';
  pathToImage: string = '../assets/images/patrick.png';
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
