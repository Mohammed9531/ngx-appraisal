// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BaseFormModule } from './../../shared/components/base-form/base-form.module';

// Components
import { YaParentingComponent } from './ya-parenting.component';

// YA Parenting Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaParentingComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BaseFormModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaParentingComponent
  ],
  exports: [RouterModule]
})
export class YaParentingModule { }
