import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesDetailsPage } from './des-details';

@NgModule({
  declarations: [
    DesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DesDetailsPage),
  ],
})
export class DesDetailsPageModule {}
