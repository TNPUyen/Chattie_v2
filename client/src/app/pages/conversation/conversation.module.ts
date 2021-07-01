import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversationRoutingModule } from './conversation-routing.module';
import { ConversationComponent } from './conversation.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    ConversationComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ConversationRoutingModule
  ]
})
export class ConversationModule { }
