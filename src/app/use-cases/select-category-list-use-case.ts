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

    setting.categoryList!.items!.find((v) => v.id === categoryId)?.select();
    setting.categoryList!.attach();
    setting.setTemplateList(new TemplateList());

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
