export interface TableFile {
  name: string;
}

export type TableList = {
  tables: Table[];
};

export interface Table {
  title: string;
  rows: number;
  columns: number;
  notes: string;
}
