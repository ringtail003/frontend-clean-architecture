import { Entity } from 'src/app/entities/entity';
import { Group } from 'src/app/entities/group';

export class GroupList extends Entity<GroupList> {
  #items: Group[] | null;

  constructor() {
    super();
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
