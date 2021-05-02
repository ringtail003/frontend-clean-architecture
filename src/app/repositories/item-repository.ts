import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { ItemListApiPresenter } from 'src/app/api-presenters/item-list-api-presenter';
import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { TypeId } from 'src/app/entities/type';

@Injectable({
  providedIn: 'root',
})
export class ItemRepository {
  constructor(private presenter: ItemListApiPresenter) {}

  getList(typeId: TypeId): Rx.Observable<ItemList> {
    const items = (() => {
      switch (typeId) {
        case 'typeA':
          return [
            new Item({ id: 1, label: 'item1' }),
            new Item({ id: 2, label: 'item2' }),
            new Item({ id: 3, label: 'item3' }),
            new Item({ id: 4, label: 'item4' }),
            new Item({ id: 5, label: 'item5' }),
          ];

        case 'typeB':
          return [];

        case 'typeC':
          return [
            new Item({ id: 1, label: 'item1' }),
            new Item({ id: 2, label: 'item2' }),
          ];

        default:
          throw new InvalidTypeError(typeId);
      }
    })();

    return Rx.of(this.presenter.parseGetListBody(typeId, items)).pipe(
      delay(3000)
    );
  }
}

class InvalidTypeError extends Error {
  constructor(_: never, message?: string) {
    super(message);
  }
}
