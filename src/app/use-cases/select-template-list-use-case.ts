import { Injectable } from '@angular/core';
import { Setting } from 'src/app/entities/setting';
import { TemplateRepository } from 'src/app/repositories/template-repository';

@Injectable({
  providedIn: 'root',
})
export class SelectTemplateListUseCase {
  constructor(private templateRepository: TemplateRepository) {}

  exec(
    setting: Setting,
    templateId: number,
    handler: (setting: Setting) => void
  ): void {
    setting.templateList!.items!.find((v) => v.id === templateId)?.select();
    handler(setting);
  }
}
