import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentNav: string = 'Home';
  constructor() { }

  ngOnInit(): void {
  }

  navClick(current:string) {
    this.currentNav = current;
  }

}
