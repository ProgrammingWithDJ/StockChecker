import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.scss']
})
export class StocklistComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  
  getBannerData(){
    this.api.getTrendingCurrency();
  }
}
