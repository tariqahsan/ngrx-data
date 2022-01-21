import { Observable } from 'rxjs';
import { RecordmgmtService } from './../recordmgmt.service';
import { Component, OnInit } from '@angular/core';
// import { DoeMetadata } from 'src/app/models/doe-metadata.model';
import { DoeMetadata } from '../../models/doe-metadata.model';

@Component({
  selector: 'app-recordmgmt-list',
  templateUrl: './recordmgmt-list.component.html',
  styleUrls: ['./recordmgmt-list.component.css'],
})
export class RecordmgmtListComponent implements OnInit {
  recordmgmts$: Observable<DoeMetadata[]> | undefined;
  constructor(private recordmgmtService: RecordmgmtService) {}

  ngOnInit(): void {
    this.recordmgmts$ = this.recordmgmtService.entities$;
  }

  onDeleteRecordmgmt(event: Event, doeId: string) {
    event.preventDefault();
    if (confirm('Are you sure you want to delete the record management entity')) {
      this.recordmgmtService.delete(doeId);
    }
  }
}
