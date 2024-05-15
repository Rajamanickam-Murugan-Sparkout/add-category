import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.css']
})
export class NestedFormArrayComponent {
  usingNestedFormArray!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.usingNestedFormArray = this.fb.group({
      categories: this.fb.array([],Validators.required)
    });
  }

  get categories(): FormArray {
    return this.usingNestedFormArray.get('categories') as FormArray;
  }

  addNewCategory(): FormGroup {
    return this.fb.group({
      category: this.fb.array([], Validators.required)
    });
  }

  addCategory() {
    this.categories.push(this.addNewCategory());
  }

  removeCategory(categoryIndex: number) {
    this.categories.removeAt(categoryIndex);
  }

  addNewItem(categoryIndex: number): FormArray {
    return (this.categories.at(categoryIndex).get('category') as FormArray);
  }

  newItem(): FormGroup {
    return this.fb.group({
      item:['', Validators.required]
    });
  }

  addItem(categoryIndex: number) {
    this.addNewItem(categoryIndex).push(this.newItem());
  }

  removeItem(categoryIndex: number, itemIndex: number) {
    this.addNewItem(categoryIndex).removeAt(itemIndex);
  }

  onSubmit() {
    console.log(this.usingNestedFormArray.value);
  }
}
