import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import snarkdown from 'snarkdown';

@Component({
  selector: 'mn-md-editor',
  templateUrl: './md-editor.component.html',
  styleUrls: ['./md-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MdEditorComponent),
      multi: true
    }
  ]
})

export class MdEditorComponent implements OnInit, ControlValueAccessor {
  public isDisabled: boolean = false;
  public textareaValue: string ='# Заголовок 1 \n## Заголовок 2';
  
  constructor() {}

  public onChange(markdownStr: string): void {}
  public onTouch(): void {}
  public ngOnInit(): void {}

  public onChangeTextareaValue(newTextareaValue: string): void {
    this.textareaValue = newTextareaValue;
    this.onChange(newTextareaValue);
  }
  
  public registerOnChange(fn: (str: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {  
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public convertMdToHTML(markdownStr: string): string {
    return snarkdown(markdownStr);
  }

  writeValue(markdownStr: string): void {
    this.textareaValue = markdownStr;
  }

}
