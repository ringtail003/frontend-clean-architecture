import { Type } from 'src/app/entities/type';

export class TypeList {
  #items: Type[];

  constructor() {
    this.#items = [];
  }

  get items(): Type[] {
    return this.#items;
  }
  set items(items: Type[]) {
    this.#items = items;
    this.#items.forEach((v) =>
      v.setHandler((group) => this.changeHandler(group))
    );
  }

  changeHandler(type: Type) {
    this.#items.forEach((v) => {
      if (v.id !== type.id) {
        v.deselect();
      }
    });
  }
}
