import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-widow',
  templateUrl: './black-widow.component.html',
  styleUrls: ['./black-widow.component.css']
})
export class BlackWidowComponent implements OnInit {
  name: string = 'Black Widow';
  pathToImage: string = '../assets/images/black-widow.jpeg';
  power: string = 'Highly Trained Martial Arts';
  
  constructor() { }

  ngOnInit() {
  }

}
