import { Injectable } from '@angular/core';
import { CategoryList } from 'src/app/entities/category-list';
import { CategoryListViewModel } from 'src/app/view-models/category-list-view-model';

@Injectable({ providedIn: 'root' })
export class CategoryListUiPresenter {
  parse(categoryList: CategoryList | null): CategoryListViewModel {
    if (categoryList === null) {
      return {
        isEmpty: true,
        isLoading: false,
        items: null,
      };
    }

    if (!categoryList.items) {
      return {
        isEmpty: false,
        isLoading: true,
        items: null,
      };
    }

    return {
      isEmpty: false,
      isLoading: false,
      items: categoryList.items!.map(({ id, label, isSelected }) => {
        return { id, label, isSelected };
      }),
    };
  }
}
