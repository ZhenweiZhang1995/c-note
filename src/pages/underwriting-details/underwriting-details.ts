import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UnderwritingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-underwriting-details',
  templateUrl: 'underwriting-details.html',
})
export class UnderwritingDetailsPage {
  underwriting: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.underwriting = this.navParams.get('underwriting');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnderwritingDetailsPage');
  }

}
