import { Component } from '@angular/core';

 interface CreditCardOptions{
  image: string,
  title: string,
  description: string

}

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss']
})
export class CreditCardsComponent{

  public options: CreditCardOptions[]= [
    {
      image:'../../../../assets/images/updated-images/uibank_travel_rewards_card.svg',
    title:'UiBank Travel Rewards Card',
    description:'3x miles on any dining, clothing, or entertainment purchase'
    },
    {
      image:'../../../../assets/images/updated-images/uibank_cash_back_rewards_card.svg',
    title:'UiBank Cash Back Rewards Card',
    description:'1.5% back on all purchases, plain and simple'
    },
    {
      image:'../../../../assets/images/updated-images/uibank_treat_yourself_rewards_card.svg',
    title:'UiBank Treat Yo Self Rewards Card',
    description:'Ride shares and entertainment purchases get you 3 points per dollar spent'
  }];

}
