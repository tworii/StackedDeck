import { Component, OnInit, Input } from '@angular/core';
import { CardData } from '../data/card-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data:CardData;

  constructor() { }

  ngOnInit(): void {
  }

}
