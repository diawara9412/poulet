import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailPage implements OnInit {
  
  id: any;
  restaurant: any;
  categories: any[] = [];
  items: any[] = [];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private api: ApiserviceService
  ) { }

  ngOnInit() {
    this.getId();
    this.getData();
  }

  getId() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(!id) {
      this.navCtrl.back();
      return;
    }
    this.id = id;
  }

  getData() {
    this.restaurant = this.api.allRestaurants.find(x => x.id == this.id);
    this.categories = this.api.categories;
    this.items = [...this.api.allItems].filter(x => x.uid == this.id);
    console.log(this.items);
  }

  getCuisines(data: any) {
    return data.join(', ');
  }

}
