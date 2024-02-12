import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = "desc";
  itemShowCount = 12;

  constructor(){}
  ngOninit(){}

  onSort(newSort: string){
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemsUpdated(count: number){
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  }
  onColumnsUpdated(colsNum: number){
    this.columnsCountChange.emit(colsNum);
  }
}
