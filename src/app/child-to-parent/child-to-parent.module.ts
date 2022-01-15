import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildToParentComponent } from './child-to-parent.component';
import { ChildrenComponent } from './children/children.component';
import { ParentsComponent } from './parents/parents.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChildToParentComponent, ParentsComponent, ChildrenComponent],
  exports: [ChildToParentComponent, ParentsComponent, ChildrenComponent],
})
export class ChildToParentModule {}
