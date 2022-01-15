import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './@components/toolbar/toolbar.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ParentChildModule } from './parent-child/parent-child.module';
import { ChildToParentModule } from './child-to-parent/child-to-parent.module';
import { SharedServiceModule } from './shared-service/shared-service.module';

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentChildModule,
    ChildToParentModule,
    SharedServiceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
