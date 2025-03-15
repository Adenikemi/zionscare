import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activeRoute: string = '/';
  private router = inject(Router);

  services = [
    {
      icon: "assets/logo/wellbeing.png",
      heading: "Safe Haven",
      message: "We offer a offer a secure and supportive space for healing, growth, and recovery."
    },
    {
      icon: "assets/logo/behavioral_management.png",
      heading: "Behavioural Management",
      message: "We provide trauma-informed therapy, emotional support, and sessions with licensed therapists."
    },
    {
      icon: "assets/logo/education.png",
      heading: "Educational Support",
      message: "We provide homework help, school enrollment support, and personalized learning plans through assessments and education plans."
    },
    {
      icon: "assets/logo/personalDevelopment.png",
      heading: "Life Skills & Personal Development",
      message: "We offer financial literacy and budgeting workshops, life skills training, and career mentorship programs."
    },
    {
      icon: "assets/logo/health.png",
      heading: "Health & Wellness Support",
      message: "We offer health referrals, nutrition guidance, and wellness programs to support overall well-being."
    },
    {
      icon: "assets/logo/family_reunification.png",
      heading: "Family Reunification Services",
      message: "We provide supervised visitations, parenting support, and reunification planning for families."
    }
  ]

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }

  setActive(route: string) {
    this.activeRoute = route;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
