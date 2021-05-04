import { Injectable } from '@angular/core';
import { CategoryConcrete } from 'src/app/entities/category/category-concrete';
import { CategoryNone } from 'src/app/entities/category/category-none';

@Injectable({ providedIn: 'root' })
export class CategoryFactory {
  create(): CategoryNone {
    return new CategoryNone();
  }

  createByParams(params: { id: number; label: string }): CategoryConcrete {
    return new CategoryConcrete(params);
  }
}
