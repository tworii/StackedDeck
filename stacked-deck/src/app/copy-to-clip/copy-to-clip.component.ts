import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copy-to-clip',
  templateUrl: './copy-to-clip.component.html',
  styleUrls: ['./copy-to-clip.component.css']
})
export class CopyToClipComponent implements OnInit {
  @Input() code:string = "";
  @Input() hideCode:boolean;

  constructor() { }

  ngOnInit(): void {

  }

  public copyCode() {
  	var text = document.getElementById("deckCode") as HTMLInputElement;
  	text.focus();
  	text.select();
  	document.execCommand("copy");
  }
}
