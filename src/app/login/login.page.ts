import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  isTypePassword: boolean = true;
  constructor( public router: Router,) {}


  inscription(){
    this.router.navigate(["/inscription"])
  }

  ngOnInit() {
  }
  connexion(form :NgForm){

  }
  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }
}
