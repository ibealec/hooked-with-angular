import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hulk',
  templateUrl: './hulk.component.html',
  styleUrls: ['./hulk.component.css']
})
export class HulkComponent implements OnInit {
  name: string = 'Hulk';
  secretName = 'Bruce Banner';
  pathToImage: string = '../assets/images/hulk.jpeg';
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
