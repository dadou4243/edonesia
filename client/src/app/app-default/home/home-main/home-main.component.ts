import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.el);
  }

}
