import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, map, scan } from 'rxjs/operators';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message: string;
  messages: Chat[] = [];
  list$ = this.chatService.getMessages().pipe(
    filter((value) => {
      console.log("value", value);
      return value['user'] != 'Angular';
    }),
    map((value) => {
      value['message'] = value['message'].split("pinochio").join("nene long");
      return value;
    }),
    map((value) => JSON.stringify(value)),
    distinctUntilChanged(),
    map((value) => JSON.parse(value)),
    scan((acc, value) => {
      acc.push(value);
      return acc;
    }, [])
  );

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = "";
  }

  getMessages() {
    this.chatService.getMessages().subscribe((msg: Chat) => {
      try {
        this.messages.push(msg);
      }
      catch (e) {
        console.error(e);
      }
    });
  }
}

export interface Chat {
  user: string,
  message: string,
  color: string,
  backgroundColor: string
}
