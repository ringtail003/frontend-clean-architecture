import { TemplateViewModel } from 'src/app/view-models/template-view-model';

export interface TemplateListViewModel {
  isEmpty: boolean;
  isLoading: boolean;
  items: TemplateViewModel[] | null;
}
