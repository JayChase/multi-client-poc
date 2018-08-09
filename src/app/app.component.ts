import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.appName;
  asset = `../${environment.assetsPath}/image1.png`;

  constructor() {
    console.log(environment.assetsPath);
  }
}
