import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObituariesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obituaries-details',
  templateUrl: 'obituaries-details.html',
})
export class ObituariesDetailsPage {
  post:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('post');
  }
}
