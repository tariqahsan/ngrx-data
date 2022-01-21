import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatchmgmtService } from '../matchmgmt.service';
import { MustMatch } from 'src/app/helper';
import { Observable } from 'rxjs';
import { DoeMetadata } from '../doe-metadata.model';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';

// import { UserService, AlertService } from '@app/_services';
// import { MustMatch } from '@app/_helpers';

@Component({
  selector: 'app-matchmgt-detail',
  templateUrl: './matchmgt-detail.component.html',
  styleUrls: ['./matchmgt-detail.component.css']
})
export class MatchmgtDetailComponent implements OnInit {
    form!: FormGroup;
    id!: string;
    isAddMode!: boolean;
    loading = false;
    submitted = false;

    // constructor(
    //     private formBuilder: FormBuilder,
    //     private route: ActivatedRoute,
    //     private router: Router,
    //     private userService: UserService,
    //     private alertService: AlertService
    // ) {}

    alldoeMetadata$: Observable<DoeMetadata[]>;

  doeMetadataService: EntityCollectionService<DoeMetadata>;
  constructor(entityCollectionServiceFactory: EntityCollectionServiceFactory,
    public matchmgmtService: MatchmgmtService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.doeMetadataService = entityCollectionServiceFactory.create<DoeMetadata>("DoeMetadata");
    this.alldoeMetadata$ = this.doeMetadataService.entities$;
  }

//     constructor(
//       public matchmgmtService: MatchmgmtService,
//       private formBuilder: FormBuilder,
//       private route: ActivatedRoute,
//       private router: Router
//   ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['doeId'];
        console.log("DOE ID --> " + this.id)
        this.isAddMode = !this.id;
        
        // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];
        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            role: ['', Validators.required],
            password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
            confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
        }, formOptions);

        // if (!this.isAddMode) {
        //     this.matchmgmtService.getById(this.id)
        //         .pipe(first())
        //         .subscribe(x => this.form.patchValue(x));
        // }

        if(!this.isAddMode) {
            console.log("DOE ID is " + this.id);
            this.doeMetadataService.collection$.subscribe
            ((collection: { entities: { [x: string]: any; }; }) => console.log(collection.entities[this.id]))
        }
    }

    onClear() {
        console.log("In onClear ...")
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        //this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        // if (this.isAddMode) {
        //     this.createUser();
        // } else {
        //     this.updateUser();
        // }
    }

    // private createUser() {
    //     this.userService.create(this.form.value)
    //         .pipe(first())
    //         .subscribe(() => {
    //             this.alertService.success('User added', { keepAfterRouteChange: true });
    //             this.router.navigate(['../'], { relativeTo: this.route });
    //         })
    //         .add(() => this.loading = false);
    // }

    // private updateUser() {
    //     this.userService.update(this.id, this.form.value)
    //         .pipe(first())
    //         .subscribe(() => {
    //             this.alertService.success('User updated', { keepAfterRouteChange: true });
    //             this.router.navigate(['../../'], { relativeTo: this.route });
    //         })
    //         .add(() => this.loading = false);
    // }
}
