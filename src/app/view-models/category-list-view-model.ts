import { CategoryViewModel } from 'src/app/view-models/category-view-model';

export interface CategoryListViewModel {
  isEmpty: boolean;
  isLoading: boolean;
  items: CategoryViewModel[] | null;
}
