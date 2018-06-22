// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { YaHealthComponent } from './ya-health.component';

// YA Health Form Routes
const ROUTES: Route[] = [
  {
    path: '',
    component: YaHealthComponent
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    YaHealthComponent
  ],
  exports: [RouterModule]
})
export class YaHealthModule { }