import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TimeBuilderComponent } from './time-builder/time-builder.component';
import { TimeService } from './services/time.service';
import { FormsModule } from '@angular/forms';
import {AppRountingModule} from "./app-rounting.module";

@NgModule({
  declarations: [
    AppComponent,
    TimeBuilderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule,
    FormsModule
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]

})
export class AppModule {}
