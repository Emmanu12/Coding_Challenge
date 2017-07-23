import { Component, OnInit } from '@angular/core';
import { Topic } from './topic.model';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers:[TopicService]
})
export class TopicComponent implements OnInit {
  selectedTopic: Topic;
  constructor() { }

  ngOnInit() {
  }

}
