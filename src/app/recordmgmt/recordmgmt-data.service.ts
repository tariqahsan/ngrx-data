import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DoeMetadata } from './../models/doe-metadata.model';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Update } from '@ngrx/entity';

@Injectable()
export class RecordmgmtDataService extends DefaultDataService<DoeMetadata> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('DoeMetadata', http, httpUrlGenerator);
  }

  // getAll(): Observable<DoeMetadata[]> {
  //   return this.http
  //     .get(`https://vue-completecourse.firebaseio.com/posts.json`)
  //     .pipe(
  //       map((data) => {
  //         const doeMetadatas: DoeMetadata[] = [];
  //         for (let key in data) {
  //           doeMetadatas.push({ ...data[key], id: key });
  //         }
  //         return doeMetadatas;
  //       })
  //     );
  // }

  getAll(): Observable<DoeMetadata[]> {

      return this.http.get('http://localhost:8686/api/v1/doeMetadata/').pipe(
      map((data) => {
        if (!data) {
          return [];
        }
        return (data as DoeMetadata[]).map((d) => {
          // return { ...d, price: 0 };
          return { ...d};
        });
      })
    );
  }

  add(post: DoeMetadata): Observable<DoeMetadata> {
    return this.http
      .post<{ name: string }>(
        `http://localhost:8686/api/v1/doeMetadata/`,
        post
      )
      .pipe(
        map((data) => {
          return { ...post, id: data.name };
        })
      );
  }

  update(post: Update<DoeMetadata>): Observable<DoeMetadata> {
    return this.http.put<DoeMetadata>(
      `http://localhost:8686/api/v1/doeMetadata/update`,
      { ...post.changes }
    );
  }

  delete(id: string): Observable<string> {
    return this.http
      .delete(`http://localhost:8686/api/v1/doeMetadata/delete/${id}`)
      .pipe(
        map((data) => {
          return id;
        })
      );
  }
}
