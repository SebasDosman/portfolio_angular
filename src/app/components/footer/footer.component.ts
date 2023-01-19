import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  email : string = "mailto:" + environment.mail;
  linkedin : string = environment.linkedin;
  github : string = environment.github; 
  fullName : string = environment.fullName;
};
