import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent implements OnInit {
  id: number;
  topicForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.initForm();
    })
  }
  onSubmit() {
    this.topicService.addTopic(this.topicForm.value);
  }
    private initForm() {
      let topicTitle = '';
      let topicDescription = '';

    this.topicForm=new FormGroup({
      'title': new FormControl(topicTitle, Validators.required),
      'description': new FormControl(topicDescription, Validators.required),
    });

  }

}
