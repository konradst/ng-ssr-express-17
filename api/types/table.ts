export interface TableFile {
  tables: Table[];
}

export interface Table {
  title: string;
  rows: number;
  columns: number;
  notes: string;
}
