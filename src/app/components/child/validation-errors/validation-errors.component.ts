import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrorListViewModel } from 'src/app/view-models/validation-error-list-view-model';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss'],
})
export class ValidationErrorsComponent implements OnInit {
  @Input() vm!: ValidationErrorListViewModel;

  constructor() {}

  ngOnInit(): void {}
}
