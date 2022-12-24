import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { ApiService } from '../service/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.scss']
})
export class StocklistComponent implements OnInit {

  bannerData: any=[];
  displayedColumns: string[] =['symbol', 'current_price','price_change_percentage_24h','market_cap']
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private api:ApiService,private router: Router) { }

  ngOnInit(): void {
    this.getBannerData();
    this.getAllData();
  }
  
  getBannerData(){
    this.api.getTrendingCurrency("INR")
    .subscribe(res=>{
      console.log(res);
      this.bannerData=res;

    });
  }

  getAllData()
  {
    this.api.getCurrency("INR")
    .subscribe(res =>{
      console.log(res);

      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToDetails(row: any){
  this.router.navigate(['stock-details',row.id]);
  }

}
