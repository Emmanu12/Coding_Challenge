import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderBy } from './order.pipe'; 
import { JitCompiler } from '@angular/compiler';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopicComponent } from './topic/topic.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { TopicDetailComponent } from './topic/topic-detail/topic-detail.component';
import { TopicItemComponent } from './topic/topic-list/topic-item/topic-item.component';
import { AppRoutingModule } from './app-routing.module';
import { TopicStartComponent } from './topic/topic-start/topic-start.component';
import { TopicEditComponent } from './topic/topic-edit/topic-edit.component';
import { BestListComponent } from './topic/best-list/best-list.component';
import { BestItemComponent } from './topic/best-list/best-item/best-item.component';
import { COMPILER_PROVIDERS } from "@angular/compiler";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopicComponent,
    TopicListComponent,
    TopicDetailComponent,
    TopicItemComponent,
    TopicStartComponent,
    TopicEditComponent,
    BestListComponent,
    BestItemComponent,
    OrderBy
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
