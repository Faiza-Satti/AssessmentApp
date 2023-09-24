import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCandidateComponent } from './add-edit-candidate.component';

describe('AddEditCandidateComponent', () => {
  let component: AddEditCandidateComponent;
  let fixture: ComponentFixture<AddEditCandidateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCandidateComponent]
    });
    fixture = TestBed.createComponent(AddEditCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
