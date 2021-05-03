import { GroupList } from 'src/app/entities/group-list';
import { GroupSetting } from 'src/app/entities/group-setting';

export class Setting {
  #groupList: GroupList | null;
  #groupSetting: GroupSetting | null;

  constructor() {
    this.#groupList = null;
    this.#groupSetting = null;
  }

  get groupList() {
    return this.#groupList;
  }
  setGroupList(groupList: GroupList) {
    this.#groupList = groupList;
  }

  get groupSetting() {
    return this.#groupSetting;
  }
  setGroupSetting(groupSetting: GroupSetting) {
    this.#groupSetting = groupSetting;
  }

  hasData(): boolean {
    return !!this.#groupList && !!this.#groupSetting;
  }
}
