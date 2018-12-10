import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iron-man',
  templateUrl: './iron-man.component.html',
  styleUrls: ['./iron-man.component.css']
})
export class IronManComponent implements OnInit {
  name: string = 'Iron Man';
  pathToImage: string = '../assets/images/tony.jpeg';
  power: string = 'Brilliant Creativity';

  constructor() { }

  ngOnInit() {
  }

}
