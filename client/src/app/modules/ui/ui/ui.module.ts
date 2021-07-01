import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from 'src/app/core/chats/chats/chats.component';
import { ListChatComponent } from 'src/app/core/chats/list-chat/list-chat.component';
import { SuggestComponent } from 'src/app/core/request/components/suggest/suggest.component';
import { ChatUiComponent } from 'src/app/components/chat-ui/chat-ui.component';
import { RecentComponent } from 'src/app/core/chats/list-chat/components/recent/recent.component';
import { FriendlistComponent } from 'src/app/core/friendlist/friendlist.component';
import { RequestComponent } from 'src/app/core/request/request.component';
import { FriendRequestComponent } from 'src/app/core/request/components/friend-request/friend-request.component';


const UiModules = [
  ChatsComponent,
  ChatUiComponent,
  // recent-chat-page
  ListChatComponent,
  RecentComponent,
  FriendlistComponent,
  // request-page
  RequestComponent,
  FriendRequestComponent,
  SuggestComponent,

]

@NgModule({
  declarations: [UiModules],
  imports: [
    CommonModule,
  ],
  exports: [
    UiModules
  ]
})
export class UiModule { }
