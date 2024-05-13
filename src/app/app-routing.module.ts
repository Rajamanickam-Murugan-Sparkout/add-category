import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './body/form-array/form-array.component';
import { NestedFormArrayComponent } from './body/nested-form-array/nested-form-array.component';

const routes: Routes = [
  {path:'', component: FormArrayComponent },
  {path:'nested-form-array', component: NestedFormArrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
