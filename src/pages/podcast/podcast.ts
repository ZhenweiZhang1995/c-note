
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the PodcastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-podcast',
  templateUrl: 'podcast.html',
})
export class PodcastPage {

  podcasts: Observable<any>;

  constructor(private app: App, public http: Http) {

    this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=podcast').map(res => res.json()).subscribe
    (data => {
      this.podcasts = data.posts;
      console.log('my podcasts: ', data.posts);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PodcastPage');
  }

  openDetails(podcast) {
    this.app.getRootNav().push('PodcastDetailsPage', {podcast: podcast});
  }

}
