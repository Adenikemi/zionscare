import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule, CommonModule, MatDialogModule],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zionqualitycare';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (!event.url.includes('#')) {
            window.scrollTo(0, 0);
          }
        }
      });
    }
  }
}
