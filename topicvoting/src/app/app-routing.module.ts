import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { ToptopiclistComponent } from './toptopiclist/toptopiclist.component'; 

const appRoutes : Routes=[
    {path:'', redirectTo:'/toptopics', pathMatch:'full'},
    {path:'toptopics', component: ToptopiclistComponent},
    {path:'topic', component: TopicComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}