import { Injectable } from '@angular/core';
import { CategoryListResponse } from 'src/app/api-interfaces/category-api-interface';
import { CategoryList } from 'src/app/entities/category-list';
import { CategoryFactory } from 'src/app/entities/category/category-factory';

@Injectable({
  providedIn: 'root',
})
export class CategoryListPresenter {
  constructor(private factory: CategoryFactory) {}

  parseGetListBody(response: CategoryListResponse): CategoryList {
    const categoryList = new CategoryList();
    categoryList.setItems(response.map((v) => this.factory.createByParams(v)));

    return categoryList;
  }
}
