import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateListViewModel } from 'src/app/view-models/template-list-view-model';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent implements OnInit {
  @Input() vm!: TemplateListViewModel;
  @Output() onTemplateSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
