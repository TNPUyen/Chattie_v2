import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/setup/setup.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {
  selectedIndex: any = null;

  constructor() { }

  ngOnInit() {
  }

  choose(index:any){
    if(index != this.selectedIndex){
      this.selectedIndex = index;
    }
  }
 
}
