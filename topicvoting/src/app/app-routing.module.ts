import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { ToptopiclistComponent } from './toptopiclist/toptopiclist.component';
import { TopicStartComponent } from './topic/topic-start/topic-start.component';
import { TopicDetailComponent } from './topic/topic-detail/topic-detail.component'; 
import { TopicEditComponent } from './topic/topic-edit/topic-edit.component';
import { BestListComponent } from './topic/best-list/best-list.component';

const appRoutes : Routes=[
    {path:'', redirectTo:'/topic', pathMatch:'full'},
    {path:'topic', component: TopicComponent, children:[
        { path:'',component: TopicStartComponent},
        { path:'new',component: TopicEditComponent},
        { path:':id',component: TopicDetailComponent}

    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}