import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildComponent } from './parent-child.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentChildComponent, ChildComponent, ParentComponent],
  exports: [ParentChildComponent, ChildComponent, ParentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ParentChildModule {}
