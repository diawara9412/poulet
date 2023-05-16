import {Component, EnvironmentInjector, inject} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
// import function to register Swiper custom elements
import {register} from 'swiper/element/bundle';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

// register Swiper custom elements
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule,],


})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(public router: Router,) {
  }


  retour() {
    this.router.navigate(["/inscription"])
  }

  image() {
    this.router.navigate(["/upload"])
  }
}
