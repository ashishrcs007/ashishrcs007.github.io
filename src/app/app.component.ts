import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ghpages';

  constructor(private titleService:Title) {
    this.titleService.setTitle("ghpages");
  }
}
