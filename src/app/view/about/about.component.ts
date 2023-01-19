import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  aboutLeft : string = environment.aboutLeft;
  aboutRight : string = environment.aboutRight;
};
