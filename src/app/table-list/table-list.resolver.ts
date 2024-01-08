import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { PLATFORM_ID, inject } from '@angular/core';
import { Observable, filter, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Table } from '../../../types/table';
import { isPlatformBrowser } from '@angular/common';

export const TableListResolver: ResolveFn<Table['title'][]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  httpClient: HttpClient = inject(HttpClient)
): Observable<Table['title'][]> =>
  isPlatformBrowser(inject(PLATFORM_ID))
    ? httpClient.get<Table['title'][]>(
        `/api/files/${route.params['fileId']}/tables/`
      )
    : of([]);
