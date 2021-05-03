import { GroupViewModel } from 'src/app/view-models/group-view-model';

export interface GroupListViewModel {
  isEmpty: boolean;
  isLoading: boolean;
  items: GroupViewModel[] | null;
}
