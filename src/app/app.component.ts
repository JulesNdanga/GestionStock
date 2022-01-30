import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  userDetail: string;
  router: any;
  constructor( private ionicAuthService: IonicAuthService) {}

  ngOnInit() {
    this.ionicAuthService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
  }
  activePageTitle='Ges Stock';
  Pages=[
    {
      title:'Listes des Produits',
      url:'home',
      icon:'cart'
    },{
      title:'Meteo',
      url:'meteo',
      icon:'rainy'
    },{
      title:'Gps',
      url:'gps',
      icon:'globe'
    },{
      title:'Deconnexion',
      url:'/',
      icon:'log-out'
    }
  ]
 
}
