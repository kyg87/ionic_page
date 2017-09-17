import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import { Movie }  from '../../models/movies.interface';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'movie'
})
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  movies : Observable<Array<Movie>>;

  constructor( private data : DataProvider, 
    public navCtrl: NavController, public navParams: NavParams) {
      this.getPosts();
      console.log('constructor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

  getPosts(){
    this.movies = this.data.getPosts();
  }

  movieDetail(movieId : number){
    this.navCtrl.push('MovieDetailPage',{movieId});
  }
}
