import { Group } from 'src/app/entities/group';

export class GroupList {
  #items: Group[] | null;

  constructor() {
    this.#items = null;
  }

  get items() {
    return this.#items;
  }

  setItems(items: Group[]): void {
    this.#items = items;
    this.#items.forEach((v) => (v.handler = (v) => this.onChangeHandler(v)));
  }

  onChangeHandler(group: Group): void {
    this.#items!.forEach((v) => {
      if (v.id !== group.id) {
        v.deselect();
      }
    });
  }
}
