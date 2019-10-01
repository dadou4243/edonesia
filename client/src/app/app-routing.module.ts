import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-default/app-default.module').then(
        mod => mod.AppDefaultModule
      )
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./app-admin/admin.module').then(mod => mod.AdminModule)
  }
  // { path: 'search/:string', component: SearchResultsComponent },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
  // { path: '**', component: 'NotFoundComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
