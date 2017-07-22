import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Topic } from '../topic.model';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  @Output() topicWasSelected= new EventEmitter<Topic>();
  topics : Topic[]=[
    new Topic('Title test','This is a sample description'),
    new Topic('Title second','This is a sample description')
  ];

  constructor() { }

  ngOnInit() {
  }
  onTopicSelected(topic: Topic){
    this.topicWasSelected.emit(topic);
  }
}
