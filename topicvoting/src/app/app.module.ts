import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicComponent } from './topic/topic.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicDetailComponent } from './topic/topic-detail/topic-detail.component';
import { TopicItemComponent } from './topic/topic-list/topic-item/topic-item.component';
import { ToptopiclistComponent } from './toptopiclist/toptopiclist.component';
import { AppRoutingModule } from './app-routing.module';
import { TopicStartComponent } from './topic/topic-start/topic-start.component';
import { TopicEditComponent } from './topic/topic-edit/topic-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicComponent,
    TopicListComponent,
    TopicDetailComponent,
    TopicItemComponent,
    ToptopiclistComponent,
    TopicStartComponent,
    TopicEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
