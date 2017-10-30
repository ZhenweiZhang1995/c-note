import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LimericksDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-limericks-details',
  templateUrl: 'limericks-details.html',
})
export class LimericksDetailsPage {
  limerick:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.limerick = this.navParams.get('limerick');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LimericksDetailsPage');
  }

}
