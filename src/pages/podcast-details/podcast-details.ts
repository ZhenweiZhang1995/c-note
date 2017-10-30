import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PodcastDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-podcast-details',
  templateUrl: 'podcast-details.html',
})
export class PodcastDetailsPage {
  podcast:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.podcast = this.navParams.get('podcast');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PodcastDetailsPage');
  }

}
