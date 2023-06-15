import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItem, Value } from '@app/models';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectionComponent),
        multi: true,
    },
]
})
export class SelectionComponent implements OnInit, ControlValueAccessor {
  @Input() items: ControlItem[] = []
  @Input() placeholder: string = ''
  @Output() changed: EventEmitter<Value> = new EventEmitter<Value>();

  value: Value = '';
  isDisabled: boolean = false

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value: Value): void {
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

  onBlur(): void {
      this.propagateTouched();
  }

  onChanged(event: Event) {
      let selection = event.target as HTMLSelectElement
      this.value = selection.value;
      this.propagateChange(selection.value);
      this.changed.emit(selection.value);
      this.propagateTouched();
  }

  ngOnInit(): void {}
}
