import { Component, Input, OnInit } from '@angular/core';
import { GroupSettingViewModel } from 'src/app/view-models/group-setting-view-model';

@Component({
  selector: 'app-group-setting',
  templateUrl: './group-setting.component.html',
  styleUrls: ['./group-setting.component.scss'],
})
export class GroupSettingComponent implements OnInit {
  @Input() vm!: GroupSettingViewModel;

  constructor() {}

  ngOnInit(): void {}
}
