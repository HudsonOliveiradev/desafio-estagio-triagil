import { RouterModule, Routes } from '@angular/router';
import { TimeBuilderComponent } from './time-builder/time-builder.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: TimeBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRountingModule {}
