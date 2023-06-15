import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextAreaComponent),
        multi: true,
    },
],
})
export class TextAreaComponent implements OnInit, ControlValueAccessor {
  @Input() placeHolder: string = ''
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

  onChange(event: Event): void {
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
