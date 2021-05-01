import { Group } from 'src/app/entities/group';

export class GroupList {
  public readonly items: Group[];

  constructor(params: { items: Group[] }) {
    this.items = params.items;
  }
}
