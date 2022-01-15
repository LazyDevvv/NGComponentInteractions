import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ParentChildComponent } from './parent-child/parent-child.component';

const routes: Routes = [
  {
    path: 'parent-to-child',
    component: ParentChildComponent,
  },
  {
    path: 'child-to-parent',
    component: ChildToParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
