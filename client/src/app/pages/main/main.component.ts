import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/setup/setup.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private setUpService: SetupService) { }

  ngOnInit(): void {
    this.setUpService.popover();
    this.setUpService.tooltip();
  }

}
