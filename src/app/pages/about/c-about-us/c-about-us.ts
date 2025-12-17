import { Component, inject } from '@angular/core';
import { SSeo } from '../../../core/service/other/seo/s-seo';
import { RouterLink } from '@angular/router';
import { FooterCard } from '../../home/footer-card/footer-card';
import { MenuCard } from '../../home/menu-card/menu-card';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-c-about-us',
  imports: [RouterLink, FooterCard, MenuCard, MateriallistModule],
  templateUrl: './c-about-us.html',
  styleUrl: './c-about-us.scss',
})
export class CAboutUs {
  private seo = inject(SSeo);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.seo.updateMeta({
      title: 'Invite Satendra – Fill Out the Contact Form',
      description:
        'Invite Satendra to collaborate, share ideas, or connect! Fill out the contact form and get a quick response from Satendra Rajput.',
      keywords:
        'Invite Satendra, connect with Satendra, Satendra Rajput contact, invite form, collaboration with Satendra',
      url: 'https://dev-tools.com/invite-satendra',
      image: 'https://dev-tools.com/assets/cover-image.png',
    });
  }
}
