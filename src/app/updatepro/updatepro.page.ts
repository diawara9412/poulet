import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepro',
  templateUrl: './updatepro.page.html',
  styleUrls: ['./updatepro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UpdateproPage implements OnInit {

  constructor( public router: Router,) {}


  retour(){
    this.router.navigate(["/tabs/tabs/tab3"])
  }
  ngOnInit() {
  }

}
