import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { Observable, filter, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export const FileListResolver: ResolveFn<FileList> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  httpClient: HttpClient = inject(HttpClient)
): Observable<FileList> => httpClient.get<FileList>('/api/files/');
