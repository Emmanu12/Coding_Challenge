import { Topic } from './topic.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TopicService{
    topicsChanged = new Subject<Topic[]>();
    private topics : Topic[]=[
    new Topic('Title test','This is a sample description'),
    new Topic('Title second','This is a sample description')
  ];

  getTopics(){
      return this.topics.slice();
  }
    getTopic(index: number){
        return this.topics[index];
    }
    addTopic(topic: Topic) {
        this.topics.push(topic);
        this.topicsChanged.next(this.topics.slice());
  }
}