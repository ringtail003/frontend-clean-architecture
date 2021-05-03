import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupListViewModel } from 'src/app/view-models/group-list-view-model';
import { GroupViewModel } from 'src/app/view-models/group-view-model';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent implements OnInit {
  @Input() vm!: GroupListViewModel;
  @Output() onGroupSelected = new EventEmitter<GroupViewModel>();

  constructor() {}

  ngOnInit(): void {}
}
