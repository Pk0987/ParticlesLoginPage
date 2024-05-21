import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from '../js/particle-config';

declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  
   ngOnInit(): void {
      this.invokeParticles();
  }

   invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
}

}

