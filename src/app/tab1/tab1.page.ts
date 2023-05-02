
import { AnimationController, IonicModule, IonicSlides } from '@ionic/angular';
import { CommonModule } from '@angular/common'
import { BannerComponent } from '../banner/banner.component';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import SwiperCore, { SwiperOptions, Autoplay, Pagination } from 'swiper';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
SwiperCore.use([Autoplay, Pagination]);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,BannerComponent,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {
  swiperModules = [IonicSlides];
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
   slides: any[] = [];
   categoryConfig: SwiperOptions | undefined;
   bannerConfig: SwiperOptions | undefined;
   restaurantConfig: SwiperOptions | undefined;
   banners: any[] = [];
   
  constructor(private animationCtrl: AnimationController) {}
  categories = [      
    { id: 1, name: 'North Indian', image: 'assets/dishes/nan.jpg' },
    { id: 2, name: 'Italian', image: 'assets/dishes/pasta.jpg' },
    { id: 3, name: 'Chinese', image: 'assets/dishes/chowmein.jpg' },
    { id: 4, name: 'South Indian', image: 'assets/dishes/dosa.jpg' },
    { id: 5, name: 'Mexican', image: 'assets/dishes/dol.jpg' },
  ];
  categorie = [
    {id: 1, cover: 'assets/dishes/2.jpg', name: 'Indian'},
    {id: 2, cover: 'assets/dishes/3.jpg', name: 'Italian'},
    {id: 8, cover: 'assets/dishes/10.jpeg', name: 'Rolls'},
    {id: 7, cover: 'assets/dishes/9.jpeg', name: 'Burgers'},
    {id: 3, cover: 'assets/dishes/5.jpeg', name: 'Mexican'},
    {id: 4, cover: 'assets/dishes/6.jpeg', name: 'American'},
    {id: 5, cover: 'assets/dishes/7.jpeg', name: 'Chinese'},
    {id: 6, cover: 'assets/dishes/8.jpeg', name: 'Sea Food'},
  ];
  ngOnInit(): void {
    this.slides = [
      {banner: 'assets/dishes/11.jpeg'},
      {banner: 'assets/dishes/3.jpg'},
      {banner: 'assets/dishes/cab.jpg'},
      {banner: 'assets/dishes/3.jpg'},
      {banner: 'assets/dishes/cab.jpg'},
    ];
  }
  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: true,
      initialSlide: this.banners?.length > 1 ? 1 : 0,
      autoplay: {
        delay: 3000
      },
      pagination: { clickable: true }
    };
    this.categoryConfig = {
      slidesPerView: 3.5
    };
    this.restaurantConfig = {
      slidesPerView: 1.1
    };
  }
  
}
