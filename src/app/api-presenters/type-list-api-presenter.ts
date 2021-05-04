import { Injectable } from '@angular/core';
import { GetListResponse } from 'src/app/api-interfaces/type-api-interface';
import { Type } from 'src/app/entities/type';
import { TypeList } from 'src/app/entities/type-list';

@Injectable({
  providedIn: 'root',
})
export class TypeListApiPresenter {
  parseGetListBody(response: GetListResponse): TypeList {
    const typeList = new TypeList();
    typeList.setItems(response.map((v) => new Type(v)));

    return typeList;
  }
}
