import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, CommonModule, MatDialogModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zionscare';

  constructor(private router: Router) {}

  ngOnInit() {
    AOS.init();
    AOS.refresh();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.includes('#')) {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
