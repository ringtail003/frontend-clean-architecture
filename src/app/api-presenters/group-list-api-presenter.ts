import { Injectable } from '@angular/core';
import { GetListResponse } from 'src/app/api-interfaces/group-api-interface';
import { Group } from 'src/app/entities/group';
import { GroupList } from 'src/app/entities/group-list';

@Injectable()
export class GroupListApiPresenter {
  parseGetListBody(response: GetListResponse): GroupList {
    return new GroupList({ items: response.map((v) => new Group(v)) });
  }
}
