import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FibonacciClockComponent } from './fibonacci-clock/fibonacci-clock.component';
// const routes: Routes = [
//   { path: '', redirectTo: '/fibonacci-clock', pathMatch: 'full' },
//   { path: 'fibonacci-clock', component: FibonacciClockComponent },
// ];

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./fibonacci-clock/fibonacci-clock.module').then(
        (m) => m.FibonacciClockModule
      ),
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
