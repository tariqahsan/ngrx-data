import { DoeMetadata } from './../models/doe-metadata.model';
import { RecordmgmtDataService } from './recordmgmt-data.service';
import {
  EntityDefinitionService,
  EntityMetadataMap,
  EntityDataService,
} from '@ngrx/data';
import { SingleRecordmgmtComponent } from './single-recordmgmt/single-recordmgmt.component';
import { EditRecordmgmtComponent } from './edit-recordmgmt/edit-recordmgmt.component';
import { AddRecordmgmtComponent } from './add-recordmgmt/add-recordmgmt.component';
import { RecordmgmtResolver } from './recordmgmt.resolver';
import { RecordmgmtListComponent } from './list-recordmgmt/recordmgmt-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: RecordmgmtListComponent,
    resolve: { recordmgmt: RecordmgmtResolver },
  },
  { path: 'add', component: AddRecordmgmtComponent },
  {
    path: 'edit/:id',
    component: EditRecordmgmtComponent,
    resolve: { recordmgmt: RecordmgmtResolver },
  },
  {
    path: 'details/:id',
    component: SingleRecordmgmtComponent,
    resolve: { recordmgmt: RecordmgmtResolver },
  },
];

const entityMetadata: EntityMetadataMap = {
	DoeMetadata:{
    selectId:(DoeMetadata:DoeMetadata) => DoeMetadata.doeId,
		sortComparer: sortByName,
		entityDispatcherOptions: {
		optimisticUpdate: true,
		optimisticDelete: false,
    
    },
  },
};

function sortByName(a: DoeMetadata, b: DoeMetadata): number {
  let comp = a.title.localeCompare(b.title);
  return comp;
}
@NgModule({
  declarations: [
    RecordmgmtListComponent,
    SingleRecordmgmtComponent,
    EditRecordmgmtComponent,
    AddRecordmgmtComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [RecordmgmtResolver, RecordmgmtDataService],
})
export class RecordmgmtModule {
  constructor(
    eds: EntityDefinitionService,
    entityDataService: EntityDataService,
    recordmgmtDataService: RecordmgmtDataService
  ) {
    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('DoeMetadata', recordmgmtDataService);
  }
}
