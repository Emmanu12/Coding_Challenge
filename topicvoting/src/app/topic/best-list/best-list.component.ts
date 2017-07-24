import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-best-list',
  templateUrl: './best-list.component.html',
  styleUrls: ['./best-list.component.css']
})

// Component for top 20 list

export class BestListComponent implements OnInit {
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

}
