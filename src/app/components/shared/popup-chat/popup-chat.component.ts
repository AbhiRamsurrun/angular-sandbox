import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Chat } from '../../chat/chat.component';

@Component({
  selector: 'app-popup-chat',
  templateUrl: './popup-chat.component.html',
  styleUrls: ['./popup-chat.component.scss']
})
export class PopupChatComponent implements OnInit {

  message: string;
  messages: Chat[] = [];

  constructor(
    public chatService: ChatService) { }

  bntStyle: string = 'none';
  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.chatService.getMessages().subscribe((msg: Chat) => {
      try {
        this.messages.push(msg);
        this.openForm();
      }
      catch (e) {
        console.error(e);
      }
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = "";
  }

  openForm() {
    this.bntStyle = 'block';
  }

  closeForm() {
    this.bntStyle = 'none';
  }
}
