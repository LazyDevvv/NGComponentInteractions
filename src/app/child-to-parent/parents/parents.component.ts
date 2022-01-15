import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
})
export class ParentsComponent implements OnInit {

  receivedMessages!: string;
  receivedArrayOfObject: any;

  constructor() {}

  ngOnInit() {}

  receiveMessagesHandler(message: string){
    this.receivedMessages = message;
  }

  receiveArrayOfObjectHandler(arrayOfObject: any){
    this.receivedArrayOfObject = arrayOfObject;
  }

}
