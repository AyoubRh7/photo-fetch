import { Component, OnInit } from '@angular/core';

import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})
export class PhotoDisplayComponent implements OnInit {
  imageUrl="";

  constructor(private fetchPhoto: FetchPhotoService) { }

  ngOnInit(): void {

    this.fetchPhoto.getPhotos().subscribe((results)=>{
    this.imageUrl= results.urls.small;
      
    })
  }

  newPhoto(){
    this.fetchPhoto.getPhotos().subscribe(results =>{
      this.imageUrl= results.urls.small;
    });
  }

}
