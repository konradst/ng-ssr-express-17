import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, filter, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Table } from '../../../types/table';

export const TableListResolver: ResolveFn<Table['title'][]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  httpClient: HttpClient = inject(HttpClient)
): Observable<Table['title'][]> =>
  httpClient.get<Table['title'][]>(
    `/api/files/${route.params['fileId']}/tables/`
  );
