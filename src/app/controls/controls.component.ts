import { Component } from '@angular/core';
import { SimulatorService } from '../simulator.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  autoFix = true;

  constructor(
    private s: SimulatorService
  ) { }
}
