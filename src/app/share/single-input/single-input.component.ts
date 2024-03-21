import {Component, inject, Input, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatError, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ],
  standalone: true,
  imports: [
    MatLabel,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatError,
    MatInputModule
  ],
})
export class SingleInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errorMessage: string = '';
  @Input() type: 'text' | 'number' = 'text';
  @Input({required: true}) controlKey = '';

  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  get control() {
    return this.parentFormGroup.get(this.controlKey) as FormControl;
  }

  ngOnInit() {
    // this.parentFormGroup.addControl(this.controlKey, this.control);
    // this.parentFormGroup.valueChanges.subscribe(() => {
    //   if (this.control.invalid) {
    //     this.control.updateValueAndValidity();
    //   }
    // })
  }

}
