import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateComponent),
        multi: true,
    },
],
})
export class DateComponent implements OnInit, ControlValueAccessor {
  @Input() placeHolder: string = ''
  @Input() minDate: string | null = null
  @Output() changed = new EventEmitter<string>();

  value: string = ''
  isDisabled: boolean = false

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  constructor() {}

  writeValue(value: string): void {
      this.value = value;
  }

  registerOnChange(fn: any): void {
      this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.propagateTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
  }

  onInputChange(event: Event): void {
    let input = event.target as HTMLInputElement
      this.value = input.value;
      this.propagateChange(input.value);
      this.changed.emit(input.value);
  }

  onBlur(): void {
      this.propagateTouched();
  }

  ngOnInit(): void {}
}
