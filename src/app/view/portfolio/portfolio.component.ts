import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

interface proyecto {
  nombre : string;
  imagen : string;
  description : string;
  urlInternet : string;
};

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  proyectos : proyecto[] = environment.proyectos;
};
