import { Component, ViewEncapsulation ,ViewChild} from '@angular/core';
export interface Transaction {
  item: string;
  cost: number;
}
import { of } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
 
  displayedColumns = ['item', 'cost'];


//emits any number of provided values in sequence
 source = of([
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ]);
//output: 1,2,3,4,5


  transactions: any = [];

  dataSource = new MatTableDataSource(this.transactions);

  /** Gets the total cost of all transactions. */
  getTotalCost() {
  return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);

  }
  @ViewChild('paginator') paginator: MatPaginator;
 

  pageSizes = [3, 5, 7];

  ngOnInit(){

     this.source.subscribe(val => {
           
           this.transactions =val;

     });

    

    console.log("hii",this.transactions);

     this.dataSource = new MatTableDataSource(this.transactions);

  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
  }

  sortData($event){
    console.log("event",$event);
  }
}