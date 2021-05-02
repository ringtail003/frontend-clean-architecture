import { Injectable } from '@angular/core';
import { CategoryListResponse } from 'src/app/api-interfaces/category-api-interface';
import { Category } from 'src/app/entities/category';
import { CategoryList } from 'src/app/entities/category-list';

@Injectable({
  providedIn: 'root',
})
export class CategoryListPresenter {
  parseGetListBody(response: CategoryListResponse): CategoryList {
    return new CategoryList({
      items: response.map((v) => new Category(v)),
    });
  }
}
