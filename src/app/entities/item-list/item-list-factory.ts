import { Injectable } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ItemListA } from 'src/app/entities/item-list/item-list-a';
import { ItemListB } from 'src/app/entities/item-list/item-list-b';
import { ItemListC } from 'src/app/entities/item-list/item-list-c';
import { TypeId } from 'src/app/entities/type';

@Injectable()
export class ItemListFactory {
  create(typeId: TypeId, items: Item[]): ItemList {
    switch (typeId) {
      case 'typeA':
        return new ItemListA({ items });

      case 'typeB':
        return new ItemListB({ items });

      case 'typeC':
        return new ItemListC({ items });

      default:
        throw new InvalidTypeError(typeId);
    }
  }
}

class InvalidTypeError extends Error {
  constructor(_: never, message?: string) {
    super(message);
  }
}
