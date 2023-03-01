import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { barcodeValidator } from 'src/app/validations/barcode-validator';
import { PasswordValidator } from 'src/app/validations/password-validator';
import { Post2Service } from './post2.service';

@Component({
  selector: 'app-inclass',
  templateUrl: './inclass.component.html',
  styleUrls: ['./inclass.component.css']
})
export class InclassComponent {
  newUser:Login | undefined = undefined;
  public userForm = this.formBuilder.group(
    {
      email: [
        '',{Validators:[Validators.required,Validators.email]},],
      password: ['', {
        Validators: [Validators.required,barcodeValidator()],
        asyncValidators: [PasswordValidator(this.postService)],
      },],
      rememberMe: [false],
    }
  );
  save() {
    this.newUser = this.userForm.value as Login;
    console.log(this.newUser);
  }

  isInvalid(controlName: string): boolean {
    let control = this.userForm.get(controlName)!;

    if (!(control.invalid && (control.dirty || control.touched))) return false;

    if (control.errors?.['required']) return true;
    if (control.errors?.['barcodeFormat']) return true;
    if (control.errors?.['productExist']) return true;

    return false;
  }

  isValid(controlName: string) {
    let control = this.userForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }

  getControl(controlName: string) {
    return this.userForm.get(controlName)!;
  }

  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }

  constructor(
    private formBuilder: FormBuilder,
    private postService: Post2Service
  ) {
    this.postService.searchByPassword('sunt').subscribe((x) => {
      console.log(x.length);
    });
  }
}
