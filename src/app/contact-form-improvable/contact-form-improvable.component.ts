import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {SingleInputComponent} from '../share/single-input/single-input.component';
import {MatCheckbox} from "@angular/material/checkbox";

// Definición de la interfaz para los datos del formulario

@Component({
  selector: 'app-contact-form-improvable',
  standalone: true,
  providers: [
    // {
    //   provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
    //   useValue: {color: 'primary'},
    // },
  ],
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    SingleInputComponent,
    MatCheckbox
  ],
  templateUrl: './contact-form-improvable.component.html',
  styleUrls: ['./contact-form-improvable.component.css']
})
export class ContactFormImprovableComponent {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    company: new FormControl('', [Validators.required, Validators.minLength(3)]),
    position: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    isClient: new FormControl(true),
  });

  submit() {
    console.log(this.contactForm);
    // this.contactForm.get('name')?.setValue(10)
    if (this.contactForm.invalid) {
      return;
    }


  }
}
