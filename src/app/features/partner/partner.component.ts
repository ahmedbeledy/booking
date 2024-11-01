import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ProjectCardComponent } from '../projects/project-card/project-card.component';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [CommonModule,ProjectCardComponent,SharedModule],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss'
})

export class PartnerComponent {
  contactForm: FormGroup;
  egyptianRegions = [
    'Cairo',
    'Alexandria',
    'Giza',
    'Sharm El Sheikh',
    'Luxor',
    'Aswan',
    'Hurghada',
    'Fayoum',
    // add more regions as needed
  ];
  progressHeight = 0;


  constructor(private fb: FormBuilder,private el: ElementRef, private renderer: Renderer2) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      selectedArea: ['', Validators.required],
      furnishingStatus: ['', Validators.required],
      propertyType: ['', Validators.required],
      message: ['']
    });
  }
  features = [
    {
      title: 'Screened Tenants',
      description: 'We ensure high standards and protect our community by carefully screening tenants.',
      icon: 'assets/icons/screened-tenants.svg'
    },
    {
      title: 'Hassle-Free',
      description: 'Personalized property management and impeccable housekeeping services.',
      icon: 'assets/icons/hassle-free.svg'
    },
    {
      title: 'Increased Revenue',
      description: 'Maximize your revenue through optimized and trusted listings across multiple platforms.',
      icon: 'assets/icons/increased-revenue.svg'
    },
    {
      title: 'Asset Appreciation',
      description: 'Enhance your property value with our refurbishment and improvement services.',
      icon: 'assets/icons/asset-appreciation.svg'
    }
  ];
  faqs = [
    {
      question: "Should my apartment be furnished or unfurnished in order to work with BIRD NEST?",
      answer: "It's preferable for your apartment to be furnished, however, our Design Team also offers furnishing packages & mood boards.",
      isOpen: false
    },
    {
      question: "Under a revenue sharing agreement, what happens in the case of a booking cancellation?",
      answer: "It depends on the cancellation policy for each property.",
      isOpen: false
    },
    {
      question: "What is the minimum/maximum duration to lease my apartment with BIRD NEST?",
      answer: "Minimum: 3 months – Maximum: 1 year. Contracts are renewed upon agreement.",
      isOpen: false
    },
    {
      question: "What if I wanted to terminate my contract before the expiration date?",
      answer: "You can notify us 1 month prior to termination date.",
      isOpen: false
    },
    {
      question: "What are the locations you operate in?",
      answer: "New Cairo, Sheikh Zayed, North Coast, and Ain El Sokhna. If you wish to lease 3 or more apartments, we can operate a new location for you.",
      isOpen: false
    },
    {
      question: "What are the required documents for contracting?",
      answer: "National ID, bank details, and a delegation letter.",
      isOpen: false
    },
    {
      question: "Do you take buildings for a lease?",
      answer: "Yes, our sales team would go on an inspection sight-visit to ensure the building meets our design criteria.",
      isOpen: false
    }
  ];
  ngOnInit(): void {

    window.addEventListener('scroll', this.onWindowScroll.bind(this));

  }
  toggleQuestion(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Handle form submission logic here
    }
  }
  onWindowScroll(): void {
    const section = this.el.nativeElement.querySelector('.timeline-container');
    const progress = this.el.nativeElement.querySelector('.list-progress .inner');

    if (section && progress) {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrolledHeight = Math.min(sectionHeight, windowHeight - sectionTop);

        this.progressHeight = (scrolledHeight / sectionHeight) * 100;

        this.renderer.setStyle(progress, 'height', `${this.progressHeight}%`);
      }
    }
  }
}
