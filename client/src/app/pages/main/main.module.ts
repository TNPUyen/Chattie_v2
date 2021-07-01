import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

// import { MainModule } from "../../modules/main_modules/main/main.module";
import { ShareModule } from 'src/app/modules/shared_module/share/share.module';
import { UiModule } from 'src/app/modules/ui/ui/ui.module';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule,
    UiModule
  ]
})
export class MainModule { }
