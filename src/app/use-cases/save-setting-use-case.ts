import { Injectable } from '@angular/core';
import { Setting } from 'src/app/entities/setting';

@Injectable({ providedIn: 'root' })
export class SaveSettingUseCase {
  constructor() {}

  exec(setting: Setting, handler: (setting: Setting) => void): void {
    const answer = window.confirm(`
Your setting has no validation errors!😆🎉\n
Assuming that saving is completed. (Not actually saved anywhere)\n
Do you want to reset setting?
`);

    if (!answer) {
      return;
    }

    setting.clear();
    handler(setting);
  }
}
