import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import { Movie }  from '../../models/movies.interface';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment : 'movie/:movieId',
  defaultHistory :['MoviePage']
})
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movieId : number;

  movie : Observable<Movie>;
  constructor(private data : DataProvider,
    public navCtrl: NavController, public navParams: NavParams) {
      console.log(this.navCtrl.length);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailPage');
    this.movieId = this.navParams.get('movieId');
    console.log(this.movieId);
    
    this.movie =this.data.getMovie(this.movieId);
    console.log(this.navCtrl.length());
  }

}
