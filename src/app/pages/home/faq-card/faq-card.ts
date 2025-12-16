import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-faq-card',
  imports: [MateriallistModule],
  templateUrl: './faq-card.html',
  styleUrl: './faq-card.scss',
})
export class FaqCard {
  activeIndex: number | null = null;

  faqs = [
    {
      question: 'What is this Developer Tools platform?',
      answer:
        'This platform provides free online developer tools to help web developers, software engineers, and programmers work faster and more efficiently.',
    },
    {
      question: 'Who can use these developer tools?',
      answer:
        'Web developers, frontend developers, backend developers, full-stack developers, students, and software engineers can use these tools.',
    },
    {
      question: 'Are these tools free to use?',
      answer:
        'Yes, all developer tools available on this platform are completely free to use with no registration required.',
    },
    {
      question: 'What types of developer tools are available?',
      answer:
        'We provide security tools, code formatters, validators, converters, viewers, editors, SEO tools, minifiers, and various developer utilities.',
    },
    {
      question: 'Are these tools safe and secure?',
      answer:
        'Yes, all tools run securely in your browser. Your code and data are not stored or shared with any third party.',
    },
    {
      question: 'Do I need to install any software?',
      answer:
        'No installation is required. All tools work directly in your browser on desktop, tablet, and mobile devices.',
    },
    {
      question: 'Which formats and languages are supported?',
      answer:
        'The tools support JSON, XML, HTML, CSS, JavaScript, CSV, Markdown, and other commonly used developer formats.',
    },
    {
      question: 'Can I use these tools for professional projects?',
      answer:
        'Yes, these tools are suitable for learning, testing, debugging, and professional development work.',
    },
    {
      question: 'Are these tools optimized for performance?',
      answer:
        'Yes, the tools are designed to be fast, lightweight, and optimized for a smooth developer experience.',
    },
    {
      question: 'Will more developer tools be added in the future?',
      answer:
        'Yes, we regularly add new developer tools and improve existing ones based on developer needs and feedback.',
    },
  ];

  toggleFAQ(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
