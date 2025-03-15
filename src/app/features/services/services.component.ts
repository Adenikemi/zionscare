import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  private router = inject(Router);

  ngOnInit(): void {
    AOS.init();
    AOS.refresh();
  }

  goToContact() {
    this.router.navigate(["/contact"])
  }
}
