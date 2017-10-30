import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-des-details',
  templateUrl: 'des-details.html',
})
export class DesDetailsPage {
  de:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.de = this.navParams.get('de');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesDetailsPage');
  }

}
