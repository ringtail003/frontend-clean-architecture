import { Injectable } from '@angular/core';
import { GetListResponse } from 'src/app/api-interfaces/group-api-interface';
import { Item } from 'src/app/entities/item';
import { ItemList } from 'src/app/entities/item-list/item-list';
import { ItemListFactory } from 'src/app/entities/item-list/item-list-factory';
import { TypeId } from 'src/app/entities/type';

@Injectable()
export class ItemListApiPresenter {
  constructor(private factory: ItemListFactory) {}

  parseGetListBody(typeId: TypeId, response: GetListResponse): ItemList {
    return this.factory.create(
      typeId,
      response.map((v) => new Item(v))
    );
  }
}