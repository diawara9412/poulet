import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BienvenuePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
