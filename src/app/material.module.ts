import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
