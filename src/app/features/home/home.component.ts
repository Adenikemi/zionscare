import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);

  ngOnInit(): void {
    AOS.init();
    AOS.refresh();
  }

  goToAbout() {
    this.router.navigate(["/about"])
  }

  goToServices() {
    this.router.navigate(["/services"])
    
  }

  services = [
    {
      icon: "assets/images/logo/wellbeing.png",
      heading: "Safe Haven",
      message: "We offer a offer a secure and supportive space for healing, growth, and recovery."
    },
    {
      icon: "assets/images/logo/behavioral_management.png",
      heading: "Behavioural Management",
      message: "We provide trauma-informed therapy, emotional support, and sessions with licensed therapists."
    },
    {
      icon: "assets/images/logo/education.png",
      heading: "Educational Support",
      message: "We provide homework help, school enrollment support, and personalized learning plans through assessments and education plans."
    },
    {
      icon: "assets/images/logo/personalDevelopment.png",
      heading: "Life Skills & Personal Development",
      message: "We offer financial literacy and budgeting workshops, life skills training, and career mentorship programs."
    },
    {
      icon: "assets/images/logo/health.png",
      heading: "Health & Wellness Support",
      message: "We offer health referrals, nutrition guidance, and wellness programs to support overall well-being."
    },
    {
      icon: "assets/images/logo/family_reunification.png",
      heading: "Family Reunification Services",
      message: "We provide supervised visitations, parenting support, and reunification planning for families."
    }
  ]
}
