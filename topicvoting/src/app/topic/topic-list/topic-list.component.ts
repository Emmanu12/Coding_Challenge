import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  @Output() topicWasSelected= new EventEmitter<Topic>();
  topics: Topic[];

  constructor(private topicService: TopicService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.topicService.topicsChanged.subscribe(
      (topics: Topic[]) => {
        this.topics=topics;
      });

    this.topics= this.topicService.getTopics();
  }
  onTopicSelected(topic: Topic){
    this.topicWasSelected.emit(topic);
  }
  onNewTopic(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
