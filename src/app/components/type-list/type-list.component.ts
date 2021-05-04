import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeId } from 'src/app/entities/type';
import { TypeListViewModel } from 'src/app/view-models/type-list-view-model';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss'],
})
export class TypeListComponent implements OnInit {
  @Input() vm!: TypeListViewModel;
  @Output() onTypeSelected = new EventEmitter<TypeId>();

  constructor() {}

  ngOnInit(): void {}

  handleTypeSelected(id: string | null) {
    if (id === null) {
      return;
    }

    this.onTypeSelected.emit(id as TypeId);
  }

  hasSelectedItem(): boolean {
    return this.vm.items!.some((v) => v.isSelected);
  }
}
