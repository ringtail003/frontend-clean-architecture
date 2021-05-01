import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { TemplateListApiPresenter } from 'src/app/api-presenters/template-list-api-presenter';
import { TemplateList } from 'src/app/entities/template-list';

@Injectable()
export class TemplateRepository {
  constructor(private presenter: TemplateListApiPresenter) {}

  getList(categoryId: number): Rx.Observable<TemplateList> {
    const responses = [
      {
        categoryId: 1,
        response: [
          { id: 1, label: 'template1' },
          { id: 2, label: 'template2' },
        ],
      },
      {
        categoryId: 2,
        response: [
          { id: 3, label: 'template3' },
          { id: 4, label: 'template4' },
        ],
      },
    ];

    return Rx.of(
      this.presenter.parseGetListBody(
        responses.find((v) => v.categoryId === categoryId)?.response || []
      )
    ).pipe(delay(3000));
  }
}
