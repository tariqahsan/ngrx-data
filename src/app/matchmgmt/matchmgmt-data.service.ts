import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable } from 'rxjs';
import { DoeMetadata } from './doe-metadata.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MatchmgmtDataService extends DefaultDataService<DoeMetadata> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('DoeMetadata', http, httpUrlGenerator);
  }

  // getAll(): Observable<DoeMetadata[]> {

  //     return this.http.get('http://localhost:8686/api/v1/doeMetadata/').pipe(
  //     map((data) => {
  //       if (!data) {
  //         return [];
  //       }
  //       return (data as DoeMetadata[]).map((d) => {
  //         // return { ...d, price: 0 };
  //         return { ...d};
  //       });
  //     })
  //   );
  // }
}

