import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupListViewModel } from 'src/app/view-models/group-list-view-model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  @Input() vm!: GroupListViewModel;
  @Output() onGroupSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
