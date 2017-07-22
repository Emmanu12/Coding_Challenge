import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicComponent } from './topic/topic.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicDetailComponent } from './topic/topic-detail/topic-detail.component';
import { TopicItemComponent } from './topic/topic-list/topic-item/topic-item.component';
import { ToptopiclistComponent } from './toptopiclist/toptopiclist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicComponent,
    TopicListComponent,
    TopicDetailComponent,
    TopicItemComponent,
    ToptopiclistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
