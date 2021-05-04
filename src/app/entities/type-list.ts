import { Entity } from 'src/app/entities/entity';
import { Type } from 'src/app/entities/type';

export class TypeList extends Entity<TypeList> {
  #items: Type[] | null;

  constructor() {
    super();
    this.#items = null;
  }

  get items() {
    return this.#items;
  }
  setItems(items: Type[]) {
    this.#items = items;
    this.#items.forEach((v) =>
      v.setHandler((group) => this.changeHandler(group))
    );
  }

  private changeHandler(type: Type) {
    this.#items!.forEach((v) => {
      if (v.id !== type.id) {
        v.deselect();
      }
    });
  }
}
