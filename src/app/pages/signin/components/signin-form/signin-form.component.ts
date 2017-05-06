import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../modules/core/services/auth.service';
import { ObjectHelpers } from '../../../../modules/shared/helpers/object.helpers';

@Component({
  selector: 'app-signin-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  errors: {[key: string]: any} = {};
  success: {[key: string]: boolean} = {};

  private aliveSubscriptions = true;

  private readonly validationDebounceTime = 1000;

  private readonly validationMessages: {[key: string]: any} = {
    'form': {
      'fail': 'Authentication failed. Wrong cell phone number or password.'
    },
    'phone': {
      'required': 'Cell phone number is required.',
      'phone': 'Cell phone number must contain 12 digits, example 380501234567.',
    },
    'password': {
      'required': 'Password is required.',
    },
  };

  constructor(private formBuilder: FormBuilder,
              private changeDetectorRef: ChangeDetectorRef,
              private authService: AuthService,
              private router: Router,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    this.getFields().map((controlName: string) => {
      this.subscribeOnValueChanges(controlName);
    });
  }

  private getFields(): Array<string> {
    return Object.keys(this.validationMessages)
      .filter(val => val !== 'form');
  }

  getAllErrors(): Array<string> {
    return ObjectHelpers.getValues(this.errors).filter((error: string | null) => error);
  }

  hasErrors(): boolean {
    return this.getAllErrors().length > 0;
  }

  private subscribeOnValueChanges(controlName: string): void {
    const control = this.form.get(controlName);
    if (control !== null) {
      control.statusChanges
        .debounceTime(this.validationDebounceTime)
        .takeWhile(() => this.aliveSubscriptions)
        .subscribe((value: string) => this.setMessage(controlName, control));
    }
  }

  private setMessage(controlName: string, control: AbstractControl): void {
    if ((control.touched || control.dirty) && control.errors) {
      this.success[controlName] = false;
      this.errors[controlName] = Object.keys(control.errors)
        .map((key: string) => this.validationMessages[controlName][key])[0];
    } else if ((control.touched || control.dirty) && !control.errors) {
      this.errors[controlName] = null;
      this.success[controlName] = true;
    }
    this.changeDetectorRef.markForCheck();
  }

  onSubmit(): void {
    this.validateForm();

    if (this.hasErrors()) {
      this.focusOnFirstInvalidField();
    }

    if (this.form.valid) {
      this.authService.signIn(this.form.value['phone'], this.form.value['password'])
        .subscribe((result: boolean) => {
          if (result) {
            this.resetForm();
            this.onSuccess();
          } else {
            this.errors['form'] = this.validationMessages['form']['fail'];
            this.changeDetectorRef.markForCheck();
          }
        });
    }
  }

  onSuccess(): void {
    this.router.navigate(['/dashboard']);
  }

  private validateForm(): void {
    this.getFields().map((controlName: string) => {
      const control = this.form.get(controlName);
      if (control !== null) {
        control.markAsTouched();
        this.setMessage(controlName, control);
      }
    });
    this.setMessage('form', this.form);
  }

  private focusOnFirstInvalidField(): void {
    const field = this.elementRef.nativeElement.querySelector('.ng-invalid:not(form)');
    if (field) {
      field.focus();
    }
  }

  private resetForm(): void {
    this.errors = {};
    this.success = {};
    this.form.reset();
  }

  togglePassword(input: HTMLInputElement): void {
    input.type = input.type === 'text' ? 'password' : 'text';
  }

  ngOnDestroy(): void {
    this.aliveSubscriptions = false;
  }
}
