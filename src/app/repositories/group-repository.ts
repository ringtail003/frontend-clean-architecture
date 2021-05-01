import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { delay } from 'rxjs/operators';
import { GroupListApiPresenter } from 'src/app/api-presenters/group-list-api-presenter';
import { GroupList } from 'src/app/entities/group-list';

@Injectable()
export class GroupRepository {
  constructor(private presenter: GroupListApiPresenter) {}

  getList(): Rx.Observable<GroupList> {
    return Rx.of(
      this.presenter.parseGetListBody([
        { id: 1, label: 'group1' },
        { id: 2, label: 'group2' },
        { id: 3, label: 'group3' },
      ])
    ).pipe(delay(3000));
  }
}
