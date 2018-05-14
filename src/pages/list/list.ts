import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage {

  public newsPage = 'NewsPage';

  selectedItem: any;
  icons: string[];
  items: string[];
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private app: App) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');



    this.items = [
    "News",
    "Sports",
    "Obituaries",
    "Gallery",
    "Podcast",
    "Underwriting",
    "Editorials",
    "Digital Edition",
    "Videos",
    "Limericks"
    ];

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  pushNewsPage(){
  this.app.getRootNav().push('NewsPage');
  }

  pushSportsPage(){
  this.app.getRootNav().push('SportsPage');
  }

  pushObituaries(){
  this.app.getRootNav().push('ObituariesPage');
  }

  pushGallery(){
  this.app.getRootNav().push('GalleriesPage');
  }

  pushPodcast(){
  this.app.getRootNav().push('PodcastPage');
  }

  pushUnderwriting(){
  this.app.getRootNav().push('UnderwritingPage');
  }

  pushEditorials(){
  this.app.getRootNav().push('EditorialsPage');
  }

  pushVideosPage(){
  this.app.getRootNav().push('VideosPage');
  }

  pushLimericksPage(){
  this.app.getRootNav().push('LimericksPage');
  }


}
