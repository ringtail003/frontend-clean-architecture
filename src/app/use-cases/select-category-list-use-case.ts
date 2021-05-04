import { Injectable } from '@angular/core';
import { Setting } from 'src/app/entities/setting';
import { TemplateList } from 'src/app/entities/template-list';
import { TemplateRepository } from 'src/app/repositories/template-repository';

@Injectable({
  providedIn: 'root',
})
export class SelectCategoryListUseCase {
  constructor(private templateRepository: TemplateRepository) {}

  exec(
    setting: Setting,
    categoryId: number,
    handler: (setting: Setting) => void
  ): void {
    if (setting.categoryList?.isSealed) {
      return;
    }

    const category = setting.categoryList!.items!.find(
      (v) => v.id === categoryId
    );
    category!.select();
    setting.setTemplateList(new TemplateList());

    if (!category!.hasTemplates) {
      setting.templateList!.setItems([]);
      handler(setting);
      return;
    }

    setting.categoryList!.attach();
    handler(setting);

    this.templateRepository
      .getListByCategory(categoryId)
      .subscribe((templateList) => {
        setting.setTemplateList(templateList);
        setting.categoryList!.detach();
        handler(setting);
      });
  }
}
