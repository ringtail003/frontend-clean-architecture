import { Type } from 'src/app/entities/type';

export class TypeList {
  public readonly items: Type[];
  #selectedId: number | null = null;

  constructor() {
    this.items = [
      new Type({ id: 'typeA', label: 'typeA' }),
      new Type({ id: 'typeB', label: 'typeB' }),
      new Type({ id: 'typeC', label: 'typeC' }),
    ];
  }

  select(id: number | null): void {
    this.#selectedId = id || null;
  }
}
