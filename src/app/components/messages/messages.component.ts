import { MessagesService } from './../../service/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
