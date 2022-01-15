import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-shared-service',
  templateUrl: './shared-service.component.html',
  styleUrls: ['./shared-service.component.scss'],
})
export class SharedServiceComponent implements OnInit {
  
  constructor(private sharedService: SharedService) {}

  messages: string = 'This messages come from Shared Component';

  heroes = [
    { name: 'Monkey D. Luffy', power: 'Gomu Gomu' },
    { name: 'Sanji', power: 'Diable Jambe' },
    { name: 'Roronoa Zoro', power: 'Santoryu' },
  ];

  ngOnInit() {}

  sendMessages() {
    this.sharedService.sendMessages(this.messages);
  }

  sendHeroes() {
    this.sharedService.sendHeroes(this.heroes);
  }
}
