import {
  Component,
  OnInit,
  ElementRef,
  NgZone,
  OnDestroy
} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-main-activities',
  templateUrl: './main-activities.component.html',
  styleUrls: ['./main-activities.component.scss']
})
export class MainActivitiesComponent implements OnInit, OnDestroy {
  slideConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-out',
    // touchThreshold: 1000,
    // cssEase: 'linear'
    // variableWidth: true,
    // variableHeight: true
    // centerMode: true
    // slide: 'div'
    pauseOnHover: false
  };

  public $instance: any;

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit() {
    this.initSlick();
  }

  ngOnDestroy() {
    this.unslick();
  }

  initSlick() {
    const self = this;

    this.zone.runOutsideAngular(() => {
      this.$instance = $('.my-slider');

      this.$instance.slick(this.slideConfig);
    });
  }

  unslick() {
    if (this.$instance) {
      this.zone.run(() => {
        this.$instance.slick('unslick');
      });
    }
  }
}
