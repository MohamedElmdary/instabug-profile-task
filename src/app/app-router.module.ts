import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  // {component: '', }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
