import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeListViewModel } from 'src/app/view-models/type-list-view-model';
import { TypeViewModel } from 'src/app/view-models/type-view-model';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss'],
})
export class TypeListComponent implements OnInit {
  @Input() vm!: TypeListViewModel;
  @Output() onTypeSelected = new EventEmitter<TypeViewModel>();

  constructor() {}

  ngOnInit(): void {}
}
