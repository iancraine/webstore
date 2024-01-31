import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc";
  itemShowCount = 12;

  constructor(){}
  ngOninit(){}

  onSort(newSort: string){
    this.sort = newSort;
  }
  onItemsUpdated(count: number){
    this.itemShowCount = count;
  }
  onColumnsUpdated(colsNum: number){
    this.columnsCountChange.emit(colsNum);
  }
}
