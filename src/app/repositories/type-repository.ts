import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { TypeListApiPresenter } from 'src/app/api-presenters/type-list-api-presenter';
import { Type } from 'src/app/entities/type';
import { TypeList } from 'src/app/entities/type-list';

@Injectable({
  providedIn: 'root',
})
export class TypeRepository {
  constructor(private presenter: TypeListApiPresenter) {}

  getListByGroup(groupId: number): Rx.Observable<TypeList> {
    const items = ((id) => {
      if (id === 1) {
        return [
          new Type({ id: 'typeA', label: 'typeA' }),
          new Type({ id: 'typeB', label: 'typeB' }),
          new Type({ id: 'typeC', label: 'typeC' }),
        ];
      }

      if (id === 2) {
        return [
          new Type({ id: 'typeA', label: 'typeA' }),
          new Type({ id: 'typeB', label: 'typeB' }),
        ];
      }

      return [new Type({ id: 'typeA', label: 'typeA' })];
    })(groupId);

    return Rx.of(this.presenter.parseGetListBody(items)).pipe(delay(2500));
  }
}
