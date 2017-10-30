import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GalleriesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galleries-details',
  templateUrl: 'galleries-details.html',
})
export class GalleriesDetailsPage {
  gallery:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.gallery = this.navParams.get('gallery');
  }
}
