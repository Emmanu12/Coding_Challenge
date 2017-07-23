import { Topic } from './topic.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class TopicService{
    topicsChanged = new Subject<Topic[]>();
    private topics : Topic[]=[
    new Topic('Title 1','This is a sample description',10,0),
    new Topic('Title 2','This is a sample description',8,0),
    new Topic('Title 3','This is a sample description',11,0),
    new Topic('Title 4','This is a sample description',9,0),
    new Topic('Title 5','This is a sample description',3,0),
    new Topic('Title 6','This is a sample description',14,0),
    new Topic('Title 7','This is a sample description',9,0),
    new Topic('Title 8','This is a sample description',2,0),
    new Topic('Title 9','This is a sample description',5,0),
    new Topic('Title 10','This is a sample description',5,0),
    new Topic('Title 11','This is a sample description',6,0),
    new Topic('Title 12','This is a sample description',3,0),
    new Topic('Title 13','This is a sample description',3,0),
    new Topic('Title 14','This is a sample description',9,0),
    new Topic('Title 15','This is a sample description',7,0),
    new Topic('Title 16','This is a sample description',4,0),
    new Topic('Title 17','This is a sample description',3,0),
    new Topic('Title 18','This is a sample description',14,0),
    new Topic('Title 19','This is a sample description',21,0),
    new Topic('Title 20','This is a sample description',9,0),
    new Topic('Title 21','This is a sample description',2,0),
    new Topic('Title 22','This is a sample description',2,0),
    new Topic('Title 23','This is a sample description',2,0),
    new Topic('Title 24','This is a sample description',2,0)
  ];
order = "upvote";

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
    justRefresh(topic: Topic){
        this.topicsChanged.next(this.topics.slice());
    }
}