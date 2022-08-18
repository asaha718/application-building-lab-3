import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationThreadComponent,
    UserMessageComponent,
    SenderMessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
