import { Component, OnInit } from '@angular/core';
import { Topic } from './topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  selectedTopic: Topic;
  constructor() { }

  ngOnInit() {
  }

}
