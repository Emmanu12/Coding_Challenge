import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Topic } from '../../topic.model';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { TopicService } from '../../topic.service';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {
  @Input() topic: Topic;
  @Input() index: number;

  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private router: Router) { }
  ngOnInit() {
  }
  incre(){
    this.topic.upvote = this.topic.upvote+1;
    this.topicService.justRefresh(this.topic);
  }
  decre(){
    this.topic.downvote = this.topic.downvote+1;
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
