import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the UnderwritingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-underwriting',
  templateUrl: 'underwriting.html',
})
export class UnderwritingPage {

  underwritings: Observable<any>;

  constructor(private app: App, public http: Http) {

    this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=underwriting').map(res => res.json()).subscribe
    (data => {
      this.underwritings = data.posts;
      console.log('my underwritings: ', data.posts);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnderwritingPage');
  }

  openDetails(underwriting) {
    this.app.getRootNav().push('UnderwritingDetailsPage', {underwriting: underwriting});
  }

}
