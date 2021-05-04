export interface Category {
  id: number;
  label: string;
  isSelected: boolean;
  hasTemplates: boolean;
  handler: (item: Category) => void;
  select: () => void;
  deselect: () => void;
}
