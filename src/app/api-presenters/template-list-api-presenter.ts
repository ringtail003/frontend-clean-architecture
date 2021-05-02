import { Injectable } from '@angular/core';
import { GetListResponse } from 'src/app/api-interfaces/template-api-interface';
import { Template } from 'src/app/entities/template';
import { TemplateList } from 'src/app/entities/template-list';

@Injectable({
  providedIn: 'root',
})
export class TemplateListApiPresenter {
  parseGetListBody(response: GetListResponse): TemplateList {
    return new TemplateList({ items: response.map((v) => new Template(v)) });
  }
}
