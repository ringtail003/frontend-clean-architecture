import { Injectable } from '@angular/core';
import { Setting } from 'src/app/entities/setting';

@Injectable({ providedIn: 'root' })
export class SelectItemListUseCase {
  exec(
    setting: Setting,
    itemId: number,
    handler: (setting: Setting) => void
  ): void {
    const item = setting.groupSetting?.itemList?.items?.find(
      (v) => v.id === itemId
    );

    item?.isSelected ? item.deselect() : item?.select();
    handler(setting);
  }
}
