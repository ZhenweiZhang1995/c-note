import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  news: Observable<any>;

  constructor(private app: App, public http: Http) {

    this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=news').map(res => res.json()).subscribe
    (data => {
      this.news = data.posts;
      console.log('my news: ', data.posts);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  openDetails(new1) {
    this.app.getRootNav().push('NewsDetailsPage', {new1: new1});
  }

}
