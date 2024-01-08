import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { PLATFORM_ID, inject } from '@angular/core';
import { Observable, filter, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { TableFile } from '../../../types/table';

export const FileListResolver: ResolveFn<TableFile[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  httpClient: HttpClient = inject(HttpClient)
): Observable<TableFile[]> =>
  isPlatformBrowser(inject(PLATFORM_ID))
    ? httpClient.get<TableFile[]>('/api/files/')
    : of([]);
