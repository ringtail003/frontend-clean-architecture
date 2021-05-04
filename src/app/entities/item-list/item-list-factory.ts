import { Injectable } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ItemListA } from 'src/app/entities/item-list/item-list-a';
import { ItemListB } from 'src/app/entities/item-list/item-list-b';
import { ItemListC } from 'src/app/entities/item-list/item-list-c';
import { ItemListNoop } from 'src/app/entities/item-list/item-list-noop';
import { TypeId } from 'src/app/entities/type';
import { ExhaustImplementationError } from 'src/app/exceptions/exhaust-implementation-error';

@Injectable({
  providedIn: 'root',
})
export class ItemListFactory {
  create(): ItemList {
    return new ItemListNoop();
  }

  createByTypeId(typeId: TypeId, items: Item[]): ItemList {
    const itemList = (() => {
      switch (typeId) {
        case 'typeA':
          return new ItemListA();

        case 'typeB':
          return new ItemListB();

        case 'typeC':
          return new ItemListC();

        default:
          throw new ExhaustImplementationError(typeId);
      }
    })();

    itemList.setItems(items);

    return itemList;
  }
}
