import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the DesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-des',
  templateUrl: 'des.html',
})
export class DesPage {
  des: Observable<any>;

  constructor(private app: App, public http: Http) {

    this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=Digital%20Edition').map(res => res.json()).subscribe
    (data => {
      this.des = data.posts;
      console.log('my digital edition: ', data.posts);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesPage');
  }
  openDetails(de) {
    this.app.getRootNav().push('DesDetailsPage', {de: de});
  }

}
