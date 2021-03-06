import {
  MatCardModule,
  MatSortModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatRadioModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatStepperModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// load all the modules that need to imported and exported
const Modules: any[] = [
    MatIconModule
  , MatCardModule
  , MatSortModule
  , MatListModule
  , MatMenuModule
  , MatRadioModule
  , MatInputModule
  , MatTableModule
  , MatButtonModule
  , MatSelectModule
  , MatSidenavModule
  , MatToolbarModule
  , MatStepperModule
  , MatCheckboxModule
  , MatFormFieldModule
  , MatPaginatorModule
  , MatExpansionModule
  , MatSlideToggleModule
  , MatButtonToggleModule
  , MatProgressSpinnerModule
];

@NgModule({
  imports: [
      ...Modules
    , CommonModule
    , FlexLayoutModule
  ],
  exports: [...Modules]
})
export class MaterialModule { }
