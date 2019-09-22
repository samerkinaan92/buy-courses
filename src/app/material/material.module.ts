import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule, MatBadgeModule, MatProgressSpinnerModule } from '@angular/material';

const material = [MatToolbarModule, MatCardModule, MatIconModule, MatButtonModule, MatDividerModule, MatBadgeModule, MatProgressSpinnerModule];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
