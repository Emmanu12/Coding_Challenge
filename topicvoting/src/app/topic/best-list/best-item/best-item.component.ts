import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Topic } from '../../topic.model';

@Component({
  selector: 'app-best-item',
  templateUrl: './best-item.component.html',
  styleUrls: ['./best-item.component.css']
})

// Single topic in Top 20

export class BestItemComponent implements OnInit {

  @Input() topic: Topic;

  ngOnInit() {
  }
}