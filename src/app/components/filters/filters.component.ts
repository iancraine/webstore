import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy{
  categoriesSubscription: Subscription | undefined;
  @Output() showCategory = new EventEmitter<string>();

  catagories: Array<string> | undefined;

  constructor(private storeService: StoreService){}

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories()
    .subscribe((response) => {
      this.catagories = response;
    });
  }

  onShowCategory(category: string){
    this.showCategory.emit(category);
  }
}
