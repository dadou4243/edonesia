import { Component, OnInit, ElementRef } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-main-activities',
  templateUrl: './main-activities.component.html',
  styleUrls: ['./main-activities.component.scss']
})
export class MainActivitiesComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log($('.my-slider')[0]);
    console.log(this.el.nativeElement);
    console.log(document.getElementsByClassName('my-slider')[0]);
    $('.my-slider').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 1000
      // slide: 'div'
      // pauseOnHover: false
    });
  }
}
