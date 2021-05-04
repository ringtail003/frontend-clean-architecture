import { CategoryListViewModel } from 'src/app/view-models/category-list-view-model';
import { GroupListViewModel } from 'src/app/view-models/group-list-view-model';
import { GroupSettingViewModel } from 'src/app/view-models/group-setting-view-model';
import { TemplateListViewModel } from 'src/app/view-models/template-list-view-model';

export interface SettingViewModel {
  groupList: GroupListViewModel;
  groupSetting: GroupSettingViewModel;
  categoryList: CategoryListViewModel;
  templateList: TemplateListViewModel;
}
