import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { App } from 'ionic-angular';

/**
 * Generated class for the GalleriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galleries',
  templateUrl: 'galleries.html',
})
export class GalleriesPage {

galleries: Observable<any>;

  constructor(private app: App, public http: Http) {

  this.http.get('https://nrcolumbus.com/api/get_category_posts/?category_slug=galleries').map(res => res.json()).subscribe
  (data => {
    this.galleries = data.posts;
    console.log('my galleries: ', data.posts);
  })

  }
  openDetails(gallery) {

    this.app.getRootNav().push('GalleriesDetailsPage', {gallery: gallery});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleriesPage');
  }

}
