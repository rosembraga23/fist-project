import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [VideoComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class VideoModule { }
