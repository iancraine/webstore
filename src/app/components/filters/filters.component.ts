import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
@Output() showCategory = new EventEmitter<string>();

catagories = ['shoes', 'sports']

constructor(){}

onShowCategory(category: string){
  this.showCategory.emit(category);
  console.log(category);
}
}
