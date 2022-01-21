import { DoeMetadata } from './../models/doe-metadata.model';
import { Inject, Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class RecordmgmtService extends EntityCollectionServiceBase<DoeMetadata> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('DoeMetadata', serviceElementsFactory);
  }
}
