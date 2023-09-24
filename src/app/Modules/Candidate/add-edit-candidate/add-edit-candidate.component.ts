import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidateService } from '../Service/CandidateService';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-candidate',
  templateUrl: './add-edit-candidate.component.html',
  styleUrls: ['./add-edit-candidate.component.css']
})
export class AddEditCandidateComponent implements OnInit {
  candForm: FormGroup;

  constructor(
    private form:FormBuilder, 
    private _dialogRef:MatDialogRef<AddEditCandidateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _candidateService: CandidateService)
    {
      this.candForm = this.form.group({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        company:'',
      });
  }

  ngOnInit(): void {
    this.candForm.patchValue(this.data);
  }

  onFormSubmit(){   

    if (this.candForm.valid) {
      if (this.data) {
        this._candidateService
          .updateCandidate(this.data.id, this.candForm.value)
          .subscribe({
            next: (val: any) => {         
              alert("Candidate Updated");     
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._candidateService.addCandidate(this.candForm.value).subscribe({
          next: (val: any) => {
            alert("Candidate Added");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
