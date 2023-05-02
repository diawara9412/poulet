import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InscriptionPage implements OnInit {
 
  
  isTypePassword: boolean = true;

  constructor() {
    
  }

  ngOnInit() {
  }



  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

 
}
