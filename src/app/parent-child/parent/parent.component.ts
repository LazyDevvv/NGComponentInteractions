import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {

  messages!: string;
  words: string = 'this messages is from parent component';

  familyCollections = [{}];

  family = [
    { name: 'Mulyono Putra', age: '27', address: 'Sukabumi' },
    { name: 'Annisya', age: '20', address: 'Sukabumi' },
    { name: 'Kevin Kurniawan', age: '18', address: 'DKI Jakarta' },
  ];

  constructor() {}

  ngOnInit() {
    console.table(this.family);
  }

  sendMessages() {
    this.messages = this.words;
  }

  sendArrayOfObject() {
    this.familyCollections = this.family;
  }
}
