import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

usingFormArray!: FormGroup;

ngOnInit(): void {
  this.usingFormArray = new FormGroup({
  'inputVal': new FormControl(''),
  'items': new FormArray([])
  })
}

get items(){
  return (<FormArray>this.usingFormArray.get('items')).controls;
}

addItem(){
  const inputValue = this.usingFormArray.get('inputVal')?.value.trim();
  if (inputValue !== '') {
    const control = new FormControl(inputValue, Validators.required);
    (this.usingFormArray.get('items') as FormArray).push(control);
    this.usingFormArray.get('inputVal')?.setValue('');
  }
}

removeItem(i: number) {
  (<FormArray>this.usingFormArray.get('items')).removeAt(i);
  console.log(this.items);
}
}
