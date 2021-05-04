import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemListViewModel } from 'src/app/view-models/item-list-view-model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() vm!: ItemListViewModel;
  @Output() onItemSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
