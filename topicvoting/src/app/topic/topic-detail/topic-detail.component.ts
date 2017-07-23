import { Component, OnInit} from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Topic } from '../topic.model';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.css']
})
export class TopicDetailComponent implements OnInit {
  topic: Topic;
  id: number;
  constructor( private topicService: TopicService,
    private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.topic = this.topicService.getTopic(this.id);
    });
  }

}
