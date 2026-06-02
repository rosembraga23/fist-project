import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  bootstrap: [VideoComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class VideoModule { }
