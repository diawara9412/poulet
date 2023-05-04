
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-detailprod',
  templateUrl: './detailprod.component.html',
  styleUrls: ['./detailprod.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DetailprodComponent  implements OnInit {
  @Input() restaurant: any;

  constructor() { }

  ngOnInit() {}

  getCuisines(data: any) {
    return data.join(', ');
  }
}
