import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditorialsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editorials-details',
  templateUrl: 'editorials-details.html',
})
export class EditorialsDetailsPage {
  editorial:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.editorial = this.navParams.get('editorial');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorialsDetailsPage');
  }

}
