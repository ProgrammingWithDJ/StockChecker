import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'StockChecker';
  SelectCurrency: String="INR";

  /**
   *
   */
  constructor() {
   

  }

  sendCurrent($event: string) {
    
    }
}
