import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
  @Input() label: string = '';
    @Input() labelCss: string = ''
    @Input() control: AbstractControl = new FormControl({});

    constructor() {}

    ngOnInit(): void {}

    hasError(): boolean {
        return this.control && this.control.invalid && this.control.touched;
    }

    get errorKey() {
        return (
            this.control.touched &&
            this.control.errors &&
            Object.keys(this.control.errors)[0]
        );
    }
}
