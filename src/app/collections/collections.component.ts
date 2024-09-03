import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

  mainImageUrl = '/image/images (3).jpeg';
  image1Url = '/image/images (3).jpeg';
  image2Url = '/image/images (1).jpeg'; 
  image3Url = '/image/download.jpeg';
  image4Url =  '/image/download (1).jpeg';

  changeMainImage(imageurl: string){
    this.mainImageUrl = imageurl;
  }
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
 
  collections: any;
  constructor(private apiService: ApiService){}

  datas:any[] = []

  ngOnInit(){
    this.receiveData()
  }
   receiveData(){
    return this.apiService.getCollections().subscribe((res:any)=>{
      this.datas=res
    })
   }
}
