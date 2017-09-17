import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

   root : string = 'https://jsonplaceholder.typicode.com';
  
   posts : string = 'posts';

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  getPosts(){

    return this.http.get(this.root + "/" +this.posts).map(res=>res.json()).take(1)
  }

  getMovie(id : number){
    return this.http.get(this.root + "/" +this.posts +'/' + id).map(res=>res.json()).take(1)
  }
}
