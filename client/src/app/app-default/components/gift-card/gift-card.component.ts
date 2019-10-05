import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GiftCardsService } from 'src/app/core/services/giftCards.service';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent implements OnInit {
  giftCardForm: FormGroup;
  giftCardCode: string;
  errors: string;

  myGiftCards;

  userID = '5d65023435a0033378f476fc';

  constructor(private giftCardsService: GiftCardsService) {}

  ngOnInit() {
    this.giftCardForm = new FormGroup({
      amount: new FormControl('50')
    });

    this.myGiftCards = this.giftCardsService.getGiftCardsUser(this.userID);

    // this.giftCardsService.getGiftCardsUser(this.userID).subscribe(res => {
    //   console.log('res:', res);
    //   this.myGiftCards = res;
    // });
  }

  onClickSubmit() {
    this.giftCardsService
      .addGiftCard(this.giftCardForm.value, this.userID)
      .subscribe(res => console.log(res));
  }

  onClickCheckGiftCard() {
    this.giftCardsService.getGiftCard(this.giftCardCode).subscribe(
      res => console.log(res),
      err => {
        console.log('err', err);
        if (err.error.error === 'nonexisting giftCard') {
          this.errors =
            'No gift card was found with this code. Please try again.';
        }
      }
    );
  }
}
