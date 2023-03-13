import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FibonacciClockRoutingModule } from './fibonacci-clock-routing.module';
import { FibonacciClockComponent } from './fibonacci-clock.component';
import { SharedModule } from '../common/modules/shared/shared.module';

@NgModule({
  declarations: [FibonacciClockComponent],
  imports: [CommonModule, FibonacciClockRoutingModule, SharedModule],
})
export class FibonacciClockModule {}
