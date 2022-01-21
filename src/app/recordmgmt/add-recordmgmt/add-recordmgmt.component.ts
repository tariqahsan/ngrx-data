import { RecordmgmtService } from './../recordmgmt.service';
import { DoeMetadata } from './../../models/doe-metadata.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recordmgmt',
  templateUrl: './add-recordmgmt.component.html',
  styleUrls: ['./add-recordmgmt.component.css'],
})
export class AddRecordmgmtComponent implements OnInit {
  addRecordmgmtForm!: FormGroup;
  constructor(private recordmgmtService: RecordmgmtService, private router: Router) {}

  ngOnInit(): void {
    this.addRecordmgmtForm = new FormGroup({
    doeId: new FormControl(null),
    authors: new FormControl(null),
    governmentContactEmail: new FormControl(null),
    governmentContactLastName: new FormControl(null),
    governmentContactPhone: new FormControl(null),
    performingOrgName: new FormControl(null),
    submitterEmailAddress: new FormControl(null),
    submitterLastName: new FormControl(null),
    submitterPhone: new FormControl(null),
    webPublicationDate: new FormControl(null),
    distributionAvailability: new FormControl(null),
    documentSubTypeDesc: new FormControl(null),
    documentTypeDesc: new FormControl(null),
    fundingOrgName: new FormControl(null),
    doi: new FormControl(null),
    title: new FormControl(null),
    journalTitle: new FormControl(null)
    });
  }

  onAddRecordmgmt() {
    const doeMetadata: DoeMetadata = this.addRecordmgmtForm.value;
    this.recordmgmtService.add(doeMetadata).subscribe((data) => {
      this.router.navigate(['/recordmgmt']);
    });
  }
}
