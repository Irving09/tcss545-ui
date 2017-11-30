import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatToolbarModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  exports: [
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
