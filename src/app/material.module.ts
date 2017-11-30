import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  exports: [
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule
  ]
})
export class MaterialModule {}
