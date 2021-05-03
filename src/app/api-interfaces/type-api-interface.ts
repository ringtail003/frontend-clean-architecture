import { TypeId } from 'src/app/entities/type';

export type GetListResponse = {
  id: TypeId;
  label: string;
}[];
