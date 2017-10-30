import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the LimericksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-limericks',
  templateUrl: 'limericks.html',
})
export class LimericksPage {
    limericks: Observable<any>;

    constructor(private app: App, public http: Http) {

      this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=limericks').map(res => res.json()).subscribe
      (data => {
        this.limericks = data.posts;
        console.log('my limericks: ', data.posts);
      })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LimericksPage');
  }

  openDetails(limerick) {
    this.app.getRootNav().push('LimericksDetailsPage', {limerick: limerick});
  }

}
