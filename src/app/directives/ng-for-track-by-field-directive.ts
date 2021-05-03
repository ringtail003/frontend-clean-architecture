import { NgForOf } from '@angular/common';
import { Directive, Host, Input } from '@angular/core';

@Directive({
  selector: '[ngForTrackByField]',
})
export class NgForTrackByIdDirective<T> {
  @Input()
  public ngForTrackByField!: keyof T;

  constructor(@Host() private ngFor: NgForOf<T>) {
    this.ngFor.ngForTrackBy = (index: number, item: T) => {
      if (this.ngForTrackByField) {
        return item[this.ngForTrackByField];
      }

      return item;
    };
  }
}
