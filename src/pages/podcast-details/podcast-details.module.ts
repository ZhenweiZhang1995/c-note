import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PodcastDetailsPage } from './podcast-details';

@NgModule({
  declarations: [
    PodcastDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PodcastDetailsPage),
  ],
})
export class PodcastDetailsPageModule {}
