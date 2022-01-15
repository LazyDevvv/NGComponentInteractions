import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServiceComponent } from './shared-service.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SharedServiceComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
  ],
  exports: [SharedServiceComponent, OneComponent, TwoComponent, ThreeComponent],
})
export class SharedServiceModule {}
