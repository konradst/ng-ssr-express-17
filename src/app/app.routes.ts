import { Routes } from '@angular/router';
import { FileListResolver } from './file-list/file-list.resolver';
import { TableListResolver } from './table-list/table-list.resolver';
import { TableDetailsResolver } from './table-details/table-details.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./file-list/file-list.component').then(
        (c) => c.FileListComponent
      ),
    resolve: { fileList: FileListResolver },
  },
  {
    path: 'files/:fileId/tables',
    loadComponent: () =>
      import('./table-list/table-list.component').then(
        (c) => c.TableListComponent
      ),
    resolve: { tableList: TableListResolver },
  },
  {
    path: 'files/:fileId/tables/:tableId',
    loadComponent: () =>
      import('./table-details/table-details.component').then(
        (c) => c.TableDetailsComponent
      ),
    resolve: { tableDetails: TableDetailsResolver },
  },
];
