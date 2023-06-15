import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { TextAreaModule } from './text-area/text-area.module';
import { DateModule } from './date/date.module';
import { SelectionModule } from './selection/selection.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    TextAreaModule,
    DateModule,
    SelectionModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    TextAreaModule,
    DateModule,
    SelectionModule
  ]
})
export class ControlsModule { }
