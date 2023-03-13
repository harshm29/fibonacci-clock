import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FibonacciClockComponent } from './fibonacci-clock.component';

const routes: Routes = [{ path: '', component: FibonacciClockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FibonacciClockRoutingModule {}
