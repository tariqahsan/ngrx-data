import { DoeMetadata } from './../../models/doe-metadata.model';
import { RecordmgmtService } from './../recordmgmt.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-recordmgmt',
  templateUrl: './single-recordmgmt.component.html',
  styleUrls: ['./single-recordmgmt.component.css'],
})
export class SingleRecordmgmtComponent implements OnInit {
  recordmgmt: DoeMetadata | undefined;
  constructor(
    private route: ActivatedRoute,
    private RecordmgmtService: RecordmgmtService
  ) {}

  ngOnInit(): void {
    const doeId = this.route.snapshot.params['doeId'];
    this.RecordmgmtService.entities$.subscribe((recordmgmts) => {
      this.recordmgmt = recordmgmts.find((recordmgmt) => recordmgmt.doeId === doeId);
    });
  }
}
