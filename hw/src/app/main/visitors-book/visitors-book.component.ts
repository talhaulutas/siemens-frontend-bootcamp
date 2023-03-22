import { Visitor } from 'src/app/models/visitor';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BirhdateValidator } from 'src/app/validations/birthDateValidator';
import { VisitorStateService } from 'src/app/visitor-state.service';

@Component({
  selector: 'app-visitors-book',
  templateUrl: './visitors-book.component.html',
  styleUrls: ['./visitors-book.component.css'],
})
export class VisitorsBookComponent {
  newVisitor: Visitor | undefined = undefined;
  constructor(
    private formBuilder: FormBuilder,
    public visitorService: VisitorStateService
  ) {}
  public visitorForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    content: ['', [Validators.required, Validators.minLength(50)]],
    birthDate: ['', [Validators.required, BirhdateValidator()]],
    publishdateExpire: ['3'],
    contentType: ['', [Validators.required]],
    isConfirmed: [false],
  });

  isInvalid(controlName: string): boolean {
    let control = this.visitorForm.get(controlName)!;

    if (!(control.invalid && (control.dirty || control.touched))) return false;
    if (control.errors?.['required']) return true;
    if (control.errors?.['minlength']) return true;
    if (control.errors?.['maxlength']) return true;
    if (control.errors?.['max']) return true;
    if (control.errors?.['min']) return true;
    if (control.errors?.['email']) return true;
    if (control.errors?.['pattern']) return true;
    if (control.errors?.['birthdateFormat']) return true;
    return false;
  }
  getControl(controlName: string) {
    return this.visitorForm.get(controlName)!;
  }

  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }

  save() {
    if (this.visitorForm.invalid) {
      alert("Form could not submitted.");
      return;
    }
    this.visitorForm.controls['isConfirmed'].setValue(false);
    this.newVisitor = this.visitorForm.value as unknown as Visitor;
    this.visitorService.addVisitor(this.newVisitor);
    this.visitorService.resetForm(this.visitorForm);
    alert('Form submitted.');
  }
}
