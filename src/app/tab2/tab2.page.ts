import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { EmptyComponent } from '../empty/empty.component';
import { DetailprodComponent } from '../detailprod/detailprod.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule,ExploreContainerComponent,FormsModule,CommonModule,EmptyComponent,DetailprodComponent]
})
export class Tab2Page {

  query: any;
  searchBtn: boolean | undefined;
  searchBar: boolean | undefined;
  categories: any[] = [];
  allRestaurants: any[] = [];
  restaurants: any[] = [];
  isLoading: boolean | undefined;
  item = {
    // icon: 'search-outline',
    image: 'assets/imgs/sad.png',
    color: 'primary',
    title: 'Sorry! No results found',
    // subTitle: 'No results found'
  };

  constructor() { }

  ngOnInit() {
    this.categories = [
      {id: 1, cover: 'assets/dishes/2.jpg', name: 'Indian'},
      {id: 2, cover: 'assets/dishes/3.jpg', name: 'Italian'},
      {id: 8, cover: 'assets/dishes/10.jpeg', name: 'Rolls'},
      {id: 7, cover: 'assets/dishes/9.jpeg', name: 'Burgers'},
      {id: 3, cover: 'assets/dishes/5.jpeg', name: 'Mexican'},
      {id: 4, cover: 'assets/dishes/6.jpeg', name: 'American'},
      {id: 5, cover: 'assets/dishes/7.jpeg', name: 'Chinese'},
      {id: 6, cover: 'assets/dishes/8.jpeg', name: 'Sea Food'},
    ];

    this.allRestaurants = [
      {
        id: '1',
        cover: 'assets/dishes/3.jpg',
        name: 'Kolkata Roll',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        id: '2',
        cover: 'assets/dishes/2.jpg',
        name: 'Stayfit1',
        cuisines: [
          'Italian',
          'Mexican',
          'Chinese'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        id: '3',
        cover: 'assets/dishes/restaurant.jpg',
        name: 'Stayfit',
        cuisines: [
          'Indian',
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100,
        latitude: 0,
        longitude: 0
      },
    ];
  }

  updateSearch(query?:any ) {
    if(query) this.query = query;
    this.searchBar = true;
    // get restaurant data
    this.isLoading = true;
    setTimeout(() => {
      this.restaurants = this.allRestaurants.filter(x => { 
        return (x.name).toLowerCase().includes(this.query.toLowerCase()) 
        || x.cuisines.find((z: string) => z.toLowerCase().includes(this.query.toLowerCase()));
      });
      console.log('update restaurant data: ', this.restaurants);
      this.isLoading = false;
    }, 3000);
  }

  onInputQuery() {
    console.log('input query: ', this.query);
    if(this.query.length > 0) {
      this.searchBtn = true;
    } else {
      this.searchBtn = false;
    }
  }

  toggleSearch(val?: any) {
    if(val) {
      this.query = '';
      this.onInputQuery();
    }
    this.searchBar = !this.searchBar;
  }


}
