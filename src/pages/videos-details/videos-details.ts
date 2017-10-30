import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VideosDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos-details',
  templateUrl: 'videos-details.html',
})
export class VideosDetailsPage {
  video:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.video = this.navParams.get('video');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosDetailsPage');
  }

}
