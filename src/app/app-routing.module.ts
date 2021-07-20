import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login-component',
    pathMatch: 'full',
  },
  { path: 'portfolio-component', component: PortfolioComponent },
  { path: 'login-component', component: LoginComponent },
  { path: '**', redirectTo: '/login-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
