import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeRoute: string = '/';
  private router = inject(Router)

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isScrolled = scrollPosition > 70;
    }
  }
}
