import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatBoxComponent } from './chat-box/chat-box.component';


@NgModule({
  // declarations: [ChatBoxComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
// { path: 'chat', component: ChatBoxComponent }
    ])
  ],
  declarations: [ChatBoxComponent]
})
export class ChatModule { }
