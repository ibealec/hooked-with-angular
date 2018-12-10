import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hulk',
  templateUrl: './hulk.component.html',
  styleUrls: ['./hulk.component.css']
})
export class HulkComponent implements OnInit {
  name: string = 'Hulk';
  pathToImage: string = '../assets/images/hulk.jpeg';
  power: string = 'incredible strength';
  
  constructor() { }

  ngOnInit() {
  }

}
