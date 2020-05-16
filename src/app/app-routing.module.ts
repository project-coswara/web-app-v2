import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {FaqComponent} from "./faq/faq.component";
import {NewsComponent} from "./news/news.component";
import {TeamComponent} from "./team/team.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'news', component: NewsComponent},
  {path: 'team', component: TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
