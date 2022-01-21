import { mergeMap, map, first, tap } from 'rxjs/operators';
import { RecordmgmtService } from './recordmgmt.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class RecordmgmtResolver implements Resolve<boolean> {
  constructor(private recordmgmtService: RecordmgmtService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.recordmgmtService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.recordmgmtService.getAll();
        }
      }),
      first()
    );
  }
}
