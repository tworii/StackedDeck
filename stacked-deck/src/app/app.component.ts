import { Component } from '@angular/core';
import { CardData } from './data/card-data';
import { DeckData } from './data/deck-data';
import { decode, encode } from 'lor-deckcode'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static iconJSON = require('../assets/lorJSONS/globals-en_us.json');
  public static set1JSON = require('../assets/lorJSONS/set1-en_us.json');
  public static set2JSON = require('../assets/lorJSONS/set2-en_us.json');
  public static set3JSON = require('../assets/lorJSONS/set3-en_us.json');

  hideInfo:boolean = true;

  code:string = "";
  regions = AppComponent.iconJSON.regions;

  sets = undefined;

  deck = [];
  toDecode = [];

  r1:string = "";
  r2:string = "";
  r1URL:string = "";
  r2URL:string = "";

  constructor() {

  }

  ngOnInit() {
  	this.sets = [...AppComponent.set1JSON, ...AppComponent.set2JSON, ...AppComponent.set3JSON];
  }

  //Randomizes the regions from which the cards will come from
  randomizeRegions() {
  	var r1 = Math.floor(Math.random() * this.regions.length);
  	var r2 = Math.floor(Math.random() * this.regions.length);
  	this.r1 = this.regions[r1].name
  	this.r1URL = this.regions[r1].iconAbsolutePath;
  	this.r2 = this.regions[r2].name
  	this.r2URL = this.regions[r2].iconAbsolutePath;
  }

  //Randomizes the type and quanity of cards based on two regions r1 and r2
  //Max 40 cards, <6 Champions, 3 or less of each card, 2 regions max
  randomizeDeck(r1:string, r2:string) {
  	this.deck.length = 0;
  	//this.deck = decode('CEBAIAIFB4WDANQIAEAQGDAUDAQSIJZUAIAQCBIFAEAQCBAA');
  	var totalCount = 0;
  	var championCount = 0;

  	var codesArray = [];
  	var countArray = [];

  	//Populate this.deck, codesArray, and countArray
  	while (totalCount < 40) {
  		var position = Math.floor(Math.random() * this.sets.length);
  		var card = this.sets[position];
  		//Check Code Format & Regions
  		if (card.cardCode.length == 7 && (card.region == this.r1 || card.region == this.r2)) {
  			//Check quanity 3 or less
  			if (codesArray.includes(card.cardCode) && countArray[codesArray.indexOf(card.cardCode)] < 3) {
  				//Check championCount <6
  				if (card.rarity == "Champion" && championCount < 6) {
					this.deck.push(new CardData(card));
					countArray[codesArray.indexOf(card.cardCode)] += 1;
					championCount++;
					totalCount++;
				} else if (card.rarity != "Champion") {
					this.deck.push(new CardData(card));
					countArray[codesArray.indexOf(card.cardCode)] += 1;
					totalCount++;
				}
  			} else if (!codesArray.includes(card.cardCode)) {
  				if (card.rarity == "Champion" && championCount < 6) {
					this.deck.push(new CardData(card));
					codesArray.push(card.cardCode);
					countArray.push(1);
					championCount++;
					totalCount++;
				} else if (card.rarity != "Champion") {
					this.deck.push(new CardData(card));
					codesArray.push(card.cardCode);
					countArray.push(1);
					championCount++;
					totalCount++;
				}
  			}
  		}
  	}

  	//Push to this.toDecode to make lor-deckcode specifications
  	codesArray.forEach((key, i) => {
  		this.toDecode.push(new DeckData(key, countArray[i]));
  	});

  	//Encode the generated deck
  	this.code = encode(this.toDecode);
  }

}
