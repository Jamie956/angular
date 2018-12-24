import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title = 'Second Component';

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
