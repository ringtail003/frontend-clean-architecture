import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryListViewModel } from 'src/app/view-models/category-list-view-model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  @Input() vm!: CategoryListViewModel;
  @Output() onCategorySelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
