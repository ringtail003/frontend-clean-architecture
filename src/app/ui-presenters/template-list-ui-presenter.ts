import { Injectable } from '@angular/core';
import { TemplateList } from 'src/app/entities/template-list';
import { TemplateListViewModel } from 'src/app/view-models/template-list-view-model';

@Injectable({ providedIn: 'root' })
export class TemplateListUiPresenter {
  parse(templateList: TemplateList | null): TemplateListViewModel {
    if (templateList === null) {
      return {
        isEmpty: true,
        isLoading: false,
        items: null,
      };
    }

    if (!templateList.items) {
      return {
        isEmpty: false,
        isLoading: true,
        items: null,
      };
    }

    return {
      isEmpty: false,
      isLoading: false,
      items: templateList.items!.map(({ id, label, isSelected }) => {
        return { id, label, isSelected };
      }),
    };
  }
}
