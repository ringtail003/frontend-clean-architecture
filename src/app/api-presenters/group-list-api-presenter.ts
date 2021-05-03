import { Injectable } from '@angular/core';
import { GetListResponse } from 'src/app/api-interfaces/group-api-interface';
import { Group } from 'src/app/entities/group';
import { GroupList } from 'src/app/entities/group-list';

@Injectable({
  providedIn: 'root',
})
export class GroupListApiPresenter {
  parseGetListBody(response: GetListResponse): GroupList {
    const groupList = new GroupList();
    groupList.setItems(response.map((v) => new Group(v)));

    return groupList;
  }
}
