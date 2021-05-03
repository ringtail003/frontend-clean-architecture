import { GroupListViewModel } from 'src/app/view-models/group-list-view-model';
import { GroupSettingViewModel } from 'src/app/view-models/group-setting-view-model';

export interface SettingViewModel {
  groupList: GroupListViewModel;
  groupSetting: GroupSettingViewModel;
}
