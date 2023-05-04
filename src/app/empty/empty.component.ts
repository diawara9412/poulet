
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class EmptyComponent  implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {}


}
