import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypeId } from 'src/app/entities/type';
import { GroupSettingViewModel } from 'src/app/view-models/group-setting-view-model';

@Component({
  selector: 'app-group-setting',
  templateUrl: './group-setting.component.html',
  styleUrls: ['./group-setting.component.scss'],
})
export class GroupSettingComponent implements OnInit {
  @Input() vm!: GroupSettingViewModel;
  @Output() onTypeSelected = new EventEmitter<TypeId>();
  @Output() onItemSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
