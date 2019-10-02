import { Component, OnInit } from '@angular/core';
import { GiftCardsService } from 'src/app/core/services/giftCards.service';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent implements OnInit {
  giftCards: any[];

  constructor(private giftCardsService: GiftCardsService) {}

  ngOnInit() {
    this.giftCardsService.getGiftCards().subscribe(res => {
      console.log(res);
      this.giftCards = res;
    });
  }
}
