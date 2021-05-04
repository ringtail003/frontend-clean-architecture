import { TypeViewModel } from 'src/app/view-models/type-view-model';

export interface TypeListViewModel {
  isEmpty: boolean;
  isLoading: boolean;
  items: TypeViewModel[] | null;
}
