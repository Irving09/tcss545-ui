import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTooltipModule
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
    MatButtonModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
