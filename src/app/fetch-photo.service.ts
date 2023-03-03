import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Photo {
  urls:{
    regular:string,
    small:string
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {

  constructor(private http: HttpClient) { }
  getPhotos(){
    return this.http.get<Photo>('https://api.unsplash.com/photos/random', {
     headers:{
       'Authorization': 'Client-ID -G76HuiJCqojsSx7lnUFAIl6yD6FsQ7Stlf_JongTk0'
     }
   });
 } 
}
