import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.autoLogin();
  
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
