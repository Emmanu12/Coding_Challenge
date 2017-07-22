import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Topic } from '../../topic.model';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {
  @Input() topic: Topic;
  @Output() topicSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.topicSelected.emit();
  }
}
