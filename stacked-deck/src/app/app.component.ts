import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static code:string = "testing";

  localCode:string = AppComponent.code;

  constructor() {

  }

  ngOnInit() {
  }
}
