import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  posts: Observable<any>;
  list: any = 'ListPage';
  settings: any = 'SettingsPage';
  news: any = 'NewsPage';
  sports: any = "SportsPage";
  galleries: any = "GalleriesPage";
  obituaries: any = "ObituariesPage";
  podcast: any = "PodcastPage";
  underwriting: any = "UnderwritingPage";
  editorials: any = "EditorialsPage";
  des: any = "DesPage";
  videos: any = "VideosPage";
  limericks: any = "LimericksPage";
  
  constructor(private auth: AngularFireAuth) { }

  signOut() {
    this.auth.auth.signOut();
  }

}
