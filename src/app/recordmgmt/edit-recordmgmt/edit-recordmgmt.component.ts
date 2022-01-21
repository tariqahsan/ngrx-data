import { RecordmgmtService } from './../recordmgmt.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-recordmgmt',
  templateUrl: './edit-recordmgmt.component.html',
  styleUrls: ['./edit-recordmgmt.component.css'],
})
export class EditRecordmgmtComponent implements OnInit {
  editRecordmgmtForm!: FormGroup;
  doeId!: string;

  constructor(
    private recordmgmtService: RecordmgmtService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editRecordmgmtForm = new FormGroup({
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

    this.doeId = this.route.snapshot.params['id'];
    console.log("DOE ID --> " + this.doeId)
    this.recordmgmtService.entities$.subscribe((doeMetadatas) => {
      console.log("doeMetadatas.length --> " + doeMetadatas.length)
      for (var doeMetadata of doeMetadatas) {
        console.log("doeMetadata.doi --> " + doeMetadata.doi)

        console.log("doeMetadata.submitterLastName --> " + doeMetadata.submitterLastName)
      }
      console.log("doeMetadatas --> " + doeMetadatas)
      //if (doeMetadatas.length) {
        //const doeMetadata = doeMetadatas.find((doeMetadata) => doeMetadata.doeId === this.doeId);

        // this.editRecordmgmtForm.patchValue({
        //   doi: 'Test DOI',
        //   title: 'Test Title',
        //   journalTitle: 'Test Journal Title'
        // });
        
      //}   
      if (doeMetadatas.length) {
        this.recordmgmtService.collection$.subscribe(collection =>
          
          this.editRecordmgmtForm.patchValue({
            doi: collection.entities[this.doeId]?.doi,
            title: collection.entities[this.doeId]?.title,
            journalTitle: collection.entities[this.doeId]?.journalTitle,
            submitterLastName: collection.entities[this.doeId]?.submitterLastName,
            submitterEmailAddress: collection.entities[this.doeId]?.submitterEmailAddress,
            governmentContactEmail: collection.entities[this.doeId]?.governmentContactEmail,
            authors: collection.entities[this.doeId]?.authors,
            webPublicationDate: collection.entities[this.doeId]?.webPublicationDate,
            performingOrgName: collection.entities[this.doeId]?.performingOrgName,
            governmentContactPhone: collection.entities[this.doeId]?.governmentContactPhone,
            governmentContactLastName: collection.entities[this.doeId]?.governmentContactLastName,
            submitterPhone: collection.entities[this.doeId]?.submitterPhone,
            fundingOrgName: collection.entities[this.doeId]?.fundingOrgName,
            documentTypeDesc: collection.entities[this.doeId]?.documentTypeDesc,
            documentSubTypeDesc: collection.entities[this.doeId]?.documentSubTypeDesc,
            distributionAvailability: collection.entities[this.doeId]?.distributionAvailability
          }));
            // .pipe(first())
            // .subscribe(x => this.form.patchValue(x));
        }
      
    });
  }

  onEditRecordmgmt() {
    const recordmgmtData = {
      ...this.editRecordmgmtForm.value,
      doeId: this.doeId,
    };

    this.recordmgmtService.update(recordmgmtData);
    this.router.navigate(['/recordmgmt']);
  }
}
