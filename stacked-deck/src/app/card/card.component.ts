import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name:string = "";
  region:string = "";
  cardCode:string = "";
  type:string = "";
  imageURL:string = "https://dd.b.pvp.net/1_16_0/set1/en_us/img/cards/01IO015T2.png";
  description:string = "test";

  constructor() { }

  ngOnInit(): void {
  }

}
