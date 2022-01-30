import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';



import { GpsPageRoutingModule } from './gps-routing.module';

import { GpsPage } from './gps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GpsPageRoutingModule
],
  exports:[Geolocation],
  declarations: [GpsPage]
})
export class GpsPageModule {}
