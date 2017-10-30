import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the ObituariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obituaries',
  templateUrl: 'obituaries.html',
})
export class ObituariesPage {
  posts: Observable<any>;

  constructor(private app: App, public http: Http) {

  this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=obituaries').map(res => res.json()).subscribe
  (data => {
    this.posts = data.posts;
    console.log('my obituaries: ', data.posts);
  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObituariesPage');
  }
  openDetails(post) {
    this.app.getRootNav().push('ObituariesDetailsPage', {post: post});
  }

}
