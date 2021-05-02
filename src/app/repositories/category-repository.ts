import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { CategoryListPresenter } from 'src/app/api-presenters/category-list-api-presenter';
import { CategoryList } from 'src/app/entities/category-list';

@Injectable({
  providedIn: 'root',
})
export class CategoryRepository {
  constructor(private presenter: CategoryListPresenter) {}

  getList(): Rx.Observable<CategoryList> {
    return Rx.of(
      this.presenter.parseGetListBody([
        { id: 1, label: 'category1' },
        { id: 2, label: 'category2' },
      ])
    ).pipe(delay(2500));
  }
}
