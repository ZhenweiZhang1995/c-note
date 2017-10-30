import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the VideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  videos: Observable<any>;

  constructor(private app: App, public http: Http) {

    this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=video').map(res => res.json()).subscribe
    (data => {
      this.videos = data.posts;
      console.log('my videos: ', data.posts);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

  openDetails(video) {
    this.app.getRootNav().push('VideosDetailsPage', {video: video});
  }

}
