import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  receivedMessages!: string;
  receivedHeroes: any[] = [];

  ngOnInit() {
    this.receiveMessagesHandler();
    this.receivedHeroesHandler();
  }

  receiveMessagesHandler() {
    this.sharedService.messages.subscribe((message) => {
      this.receivedMessages = message;
    });
  }

  receivedHeroesHandler() {
    this.sharedService.heroes.subscribe((heroes) => {
      console.log(heroes);
      this.receivedHeroes = heroes;
    });
  }
}
