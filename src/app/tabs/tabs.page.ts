import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { IonicModule, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class TabsPage {

  selectTab: any;
  
  @ViewChild('tabs') tabs!: IonTabs ;
  isHide = false;

  constructor() { }

  ngOnInit() {
  }

  setCurrentTab(event : any) {
    console.log(event);    
    this.isHide = true;
    this.selectTab = this.tabs.getSelected();
    setTimeout(() => {
      this.isHide = false;
    }, 500);
  }

  getIcon(){
    switch(true) {
      case this.selectTab == 'tab1': return 'home';
      case this.selectTab == 'tab2': return 'search-outline';
      case this.selectTab == 'tab3': return 'person-outline';
      
      default : return undefined;
    }
  }
}
