import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private themeService: ThemeService) {
    this.changeTheme(this.themeService.getTheme());
  }

  changeTheme(name: string): void {
    this.themeService.setTheme(name);
  }
}
