import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LimericksDetailsPage } from './limericks-details';

@NgModule({
  declarations: [
    LimericksDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LimericksDetailsPage),
  ],
})
export class LimericksDetailsPageModule {}
